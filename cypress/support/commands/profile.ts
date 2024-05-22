export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId("EditableProfileCardHeader.EditButton").click();
    cy.getByTestId("ProfileCard.firstname").clear().type(firstname);
    cy.getByTestId("ProfileCard.lastname").clear().type(lastname);
    cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: "PUT",
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: "asasf" },
        body: {
            id: "3",
            firstName: "testuser",
            lastName: "testuser",
            age: 245,
            currency: "USD",
            country: "Russia",
            city: "Minsk",
            username: "testuser",
            avatar: "https://webmg.ru/wp-content/uploads/2022/11/i-76-44.jpeg",
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
