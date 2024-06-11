import { ReactElement } from "react";
import { IFeatureFlags } from "@/shared/types/featureFlags";
import { getFeatureFlag } from "../setGetFeatures";

interface ToggleFeaturesProps {
    feature: keyof IFeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { on, off, feature } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};
