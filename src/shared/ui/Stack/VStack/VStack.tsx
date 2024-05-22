import { Flex, IFlexProps } from "../Flex/Flex";

type VStackProps = Omit<IFlexProps, "direction">;

export const VStack = (props: VStackProps) => {
    const { align = "start" } = props;
    return <Flex direction="column" align={align} {...props} />;
};
