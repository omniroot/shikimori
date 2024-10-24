import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

const GlobalLayout = React.lazy(
	() => import("@/app/layouts/GlobalLayout/GlobalLayout.tsx"),
);
const AnimePage = React.lazy(
	() => import("@/app/pages/AnimePage/AnimePage.tsx"),
);
const AnimesPage = React.lazy(
	() => import("@/app/pages/AnimesPage/AnimesPage.tsx"),
);
const LoginPage = React.lazy(
	() => import("@/app/pages/LoginPage/LoginPage.tsx"),
);
const NotFoundPage = React.lazy(
	() => import("@/app/pages/NotFoundPage/NotFoundPage.tsx"),
);
const ProfilePage = React.lazy(
	() => import("@/app/pages/ProfilePage/ProfilePage.tsx"),
);
const SearchPage = React.lazy(
	() => import("@/app/pages/SearchPage/SearchPage.tsx"),
);
const TestPage = React.lazy(() => import("@/app/pages/TestPage/TestPage.tsx"));

const SettingsPage = React.lazy(
	() => import("@/app/pages/SettingsPage/SettingsPage.tsx"),
);

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<GlobalLayout />}>
			<Route path="/" element={<ProfilePage />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/animes/" element={<AnimesPage />} />
			<Route path="/animes/:animeId" element={<AnimePage />} />

			<Route path="/test" element={<TestPage />} />
			<Route path="/settings" element={<SettingsPage />} />
			<Route path="/login" element={<LoginPage />} />
			{/* <Route path="/logout" element={<LogoutPage />} /> */}
			<Route path="*" element={<NotFoundPage />} />
		</Route>,
	),
);
