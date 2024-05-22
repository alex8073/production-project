import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { componentRender } from "@/shared/lib/tests/componentRender/componentsRender";
import { IProfile } from "@/entities/Profile";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { api } from "@/shared/api/api";
import { profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCard } from "./EditableProfileCard";

const profile: IProfile = {
    id: "1",
    firstName: "admin",
    lastName: "admin",
    age: 465,
    currency: Currency.USD,
    country: Country.ARMENIA,
    city: "Moscow",
    username: "admin213",
};

const options = {
    initialState: {
        profile: {
            readOnly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: "1",
                username: "admin",
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe("feature/EditableProfileCard", () => {
    test("Read only mode must switch", async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton"),
        );
        expect(
            screen.getByTestId("EditableProfileCardHeader.CancelButton"),
        ).toBeInTheDocument();
    });
    test("On cancel values must be reset", async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton"),
        );

        await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
        await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));

        await userEvent.type(
            screen.getByTestId("ProfileCard.firstname"),
            "user",
        );
        await userEvent.type(
            screen.getByTestId("ProfileCard.lastname"),
            "user",
        );

        expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user");

        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.CancelButton"),
        );
        expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue(
            "admin",
        );
        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("admin");
    });
    test("Should be validation error", async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton"),
        );
        await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.SaveButton"),
        );

        expect(
            screen.getByTestId("EditableProfileCard.Error.Header"),
        ).toBeInTheDocument();
    });
    test("If there isn`t error, PUT request should be send", async () => {
        const mockPutReq = jest.spyOn(api, "put");
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton"),
        );
        await userEvent.type(
            screen.getByTestId("ProfileCard.firstname"),
            "user",
        );
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.SaveButton"),
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});
