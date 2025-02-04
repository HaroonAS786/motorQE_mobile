import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { themeColors } from "../config/colors";
import { typography } from "../config/typography";


const CustomText = ({
	children,
	h1, h2, h3, h4, h5, h6,
	subtitle,
	body = false,
	body2,
	button,
	caption,
	size = 14,
	regular = true,
	light, medium, semiBold, bold,
	onClick,
	color = themeColors.font,
	style = {},
	numberOfLines,
	disabled,
}) => {

	const getStyles = () => ({
		fontSize: size,
		...(h1 && { fontSize: typography.h1 }),
		...(h2 && { fontSize: typography.h2 }),
		...(h3 && { fontSize: typography.h3 }),
		...(h4 && { fontSize: typography.h4 }),
		...(h5 && { fontSize: typography.h5 }),
		...(h6 && { fontSize: typography.h6 }),

		...(subtitle && { fontSize: typography.subtitle }),
		...(body && { fontSize: typography.body }),
		...(body2 && { fontSize: typography.body2 }),
		...(button && { fontSize: typography.button }),
		...(caption && { fontSize: typography.caption }),

		...(regular && { fontFamily: "Poppins-Regular" }),
		...(light && { fontFamily: "Poppins-Light" }),
		...(medium && { fontFamily: "Poppins-Medium" }),
		...(semiBold && { fontFamily: "Poppins-Semibold" }),
		...(bold && { fontFamily: "Poppins-Bold" }),
		...(color && { color }),
	})
	return (
		<>
			{
				onClick ?
					<TouchableOpacity style={{ marginTop: 8 }} hitSlop={{ top: 20, bottom: 20 }} onPress={onClick} disabled={disabled}>
						<Text adjustsFontSizeToFit={true} numberOfLines={numberOfLines} style={[styles.text, style, getStyles()]}>{children}</Text>
					</TouchableOpacity >
					: <Text adjustsFontSizeToFit={true} numberOfLines={numberOfLines} style={[styles.text, style, getStyles()]}>{children}</Text>
			}
		</>
	)
}

const styles = StyleSheet.create({
	text: {
		color: themeColors.font
	}
})

export default CustomText;