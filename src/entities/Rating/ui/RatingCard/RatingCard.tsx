import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./RatingCard.module.scss";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Card } from "@/shared/ui/Card";
import { Text } from "@/shared/ui/Text";
import { StarRating } from "@/shared/ui/StarRating";
import { Modal } from "@/shared/ui/Modal";
import { Input } from "@/shared/ui/Input";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button";
import { Drawer } from "@/shared/ui/Drawer";

interface IRatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: IRatingCardProps) => {
    const {
        className,
        onAccept,
        feedbackTitle,
        title,
        hasFeedback,
        onCancel,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [starsCount, setStarsCount] = useState<number>(rate);
    const [feedback, setFeedback] = useState<string>("");

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                placeholder={t("Your feedback")}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])} max>
            <VStack align="center" gap="8" max>
                <Text title={starsCount ? t("Thanks for the rating") : title} />
                <StarRating selectedStar={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>

            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button theme={ButtonTheme.OUTLINE_RED} onClick={cancelHandler}>
                                {t("Close")}
                            </Button>
                            <Button onClick={acceptHandler}>
                                {t("Send")}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>

            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    <VStack max gap="32">
                        {modalContent}
                        <Button fullWidth onClick={acceptHandler} size={ButtonSize.L}>
                            {t("Send")}
                        </Button>
                        <Button onClick={cancelHandler}>
                            {t("Close")}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
