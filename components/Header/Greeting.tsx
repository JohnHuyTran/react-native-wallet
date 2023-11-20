import React, { FC } from "react";
import styled from "styled-components/native";
import { StyleProp, TextStyle } from "react-native";

import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { colors } from "../../config/colors";

const StyledView = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: center;
`;

interface GreetingProps {
	mainText: string;
	subText: string;
	greeting: string;
	mainTextStyle?: StyleProp<TextStyle>;
	subTextStyle?: StyleProp<TextStyle>;
}

const Greeting: FC<GreetingProps> = ({
	mainText,
	mainTextStyle,
	greeting,
	subText,
	subTextStyle,
}) => {

    const getCurrentHours = () =>{
    let currHours = new Date().getHours();
    let greet = '';
    if(currHours >= 5 && currHours < 12) greet = 'Good Morning!'
    else if(currHours >= 12 && currHours < 18 ) greet = 'Good Afternoon!';
    else greet = 'Good Evening!';
    return greet;
    }

	return (
		<StyledView>
			<RegularText
				textStyle={[
					{
						fontSize: 22,
						color: colors.secondary,
					},
					mainTextStyle,
				]}
			>
				{mainText} {getCurrentHours()}
			</RegularText>
			<SmallText
				textStyle={[
					{
						marginTop: 5,
						color: colors.graydark,
					},
					subTextStyle,
				]}
			>
				{subText}
			</SmallText>
		</StyledView>
	);
};

export default Greeting;
