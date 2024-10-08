import { useFetchCurrentUser } from "@/shared/hooks/useFetchCurrentUser";
import { Box } from "@ui/Box/Box";
import { Divide } from "@ui/Divide/Divide";
import { ImageView } from "@ui/ImageView/ImageView";
import { Typography } from "@ui/Typography/Typography";

export const UserInfoCard = () => {
	const { nickname, lastOnlineAt, avatarUrl } = useFetchCurrentUser();

	return (
		<Box width="100%" border="none" padding="none">
			<ImageView src={avatarUrl} width="250px" radius="1" />
			<Divide orientation="vertical" width="170px" />
			<Box flexDirection="column" width="100%" border="none" padding="none">
				<Box justifyContent="space-between" width="100%" border="none">
					<Typography size="3">{nickname}</Typography>
					<Typography size="4">{lastOnlineAt}</Typography>
				</Box>
				<Box justifyContent="space-between" width="100%" border="none">
					<Typography>I love anime</Typography>
					<Typography
						backgroundColor="secondary"
						textColor="accent"
						radius="1"
						padding="1"
					>
						{import.meta.env.MODE} mode
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
