import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@metacraft/ui';

import { midnightDream } from '../../../utils/colors';

interface Props {
	text: string;
}

const MainButton: FC<Props> = ({ text = '' }: Props) => {
	return (
		<Button style={styles.container} title={text} titleStyle={styles.text} />
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: midnightDream,
		paddingVertical: 2,
		borderRadius: 10,
	},
	text: {
		textAlign: 'center',
		fontSize: 18,
		fontFamily: 'Poppins',
		fontWeight: '700',
		lineHeight: 28,
	},
});

export default MainButton;
