import { memo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./StarRating.module.scss";
import StarIcon from "@/shared/assets/icons/star.svg";

interface IStarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStar?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: IStarRatingProps) => {
    const { className, onSelect, size = 30, selectedStar = 0 } = props;

    const [currentStarCount, setCurrentStarCount] =
        useState<number>(selectedStar);
    const [isSelected, setIsSelected] = useState<boolean>(
        Boolean(selectedStar),
    );

    const onHover = (starCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClick = (starCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starCount);
            setCurrentStarCount(starCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <StarIcon
                    key={starNumber}
                    className={classNames(
                        cls.starIcon,
                        {
                            [cls.selected]: isSelected,
                            [cls.hovered]: currentStarCount >= starNumber,
                        },
                        [],
                    )}
                    width={size}
                    height={size}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onClick(starNumber)}
                    data-testid={`StarRating.${starNumber}`}
                    data-selected={currentStarCount >= starNumber}
                />
            ))}
        </div>
    );
});
