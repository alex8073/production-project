import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import TileIcon from "shared/assets/icons/tile.svg";
import ListIcon from "shared/assets/icons/list.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { ArticleListView } from "../../model/types/article";
import cls from "./ArticleListViewSelector.module.scss";

interface IArticleListViewSelectorProps {
    className?: string;
    view: ArticleListView;
    onViewClick?: (view: ArticleListView) => void;
}

const viewTypes = [
    {
        view: ArticleListView.TILE,
        icon: <TileIcon />,
    },
    {
        view: ArticleListView.LIST,
        icon: <ListIcon />,
    },
];

export const ArticleListViewSelector = memo((props: IArticleListViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView:ArticleListView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleListViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    className={classNames("viewSelector", { [cls.selected]: viewType.view === view }, [])}
                >
                    {viewType.icon}
                </Button>
            ))}
        </div>
    );
});
