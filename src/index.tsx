import React, { FC } from 'react';
import { Text } from 'react-native';
import { Provider as MetacraftProvider, themeState } from '@metacraft/ui';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { useSnapshot } from 'valtio';

import BuildStack from './stack';

export type StackParamList = {
	Dashboard: undefined;
	DetailPost: {
		avatarUrl: string;
		name: string;
		postedTime: string;
		thread: string;
		nbLikes: number;
		nbComments: number;
		isPinned: boolean;
		isFollowed: boolean;
		isLiked: boolean;
	};
	SignIn: undefined;
};

export const AppContainer: FC = () => {
	const theme = useSnapshot(themeState);
	const linking: LinkingOptions<StackParamList> = {
		prefixes: [''],
		config: {
			screens: {
				Dashboard: '',
				DetailPost: 'thread',
				SignIn: 'sign-in',
			},
		},
	};

	return (
		<MetacraftProvider>
			<NavigationContainer
				theme={theme}
				linking={linking}
				fallback={<Text>Loading...</Text>}
			>
				<BuildStack />
			</NavigationContainer>
		</MetacraftProvider>
	);
};

export default AppContainer;
