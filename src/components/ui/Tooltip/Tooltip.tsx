import { FC, ReactNode, useState } from "react";
import styles from "./Tooltip.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";

interface ITooltipProps {
	children: ReactNode;
	title?: string;
	position?: "top" | "bottom";
}
export const Tooltip: FC<ITooltipProps> = ({
	children,
	title,
	position = "top",
}) => {
	const [isHover, setIsHover] = useState(false);

	const onTooltipMouseEnter = () => {
		setIsHover(true);
	};
	const onTooltipMouseLeave = () => {
		setIsHover(false);
	};

	return (
		<div
			className={styles.tooltip_container}
			onMouseEnter={onTooltipMouseEnter}
			onMouseLeave={onTooltipMouseLeave}
		>
			<motion.div
				className={clsx(styles.tooltip, { [styles.showed]: isHover })}
				data-position={position}
				initial={{ opacity: 0, scale: 0.8 }}
				animate={
					isHover ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
				}
				transition={{ duration: 0.15, delay: 0.1 }}
			>
				{title}
			</motion.div>
			<div>{children}</div>
		</div>
	);
};
