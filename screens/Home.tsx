import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { colors } from "../config/colors";
import { Container } from "../components/shared";

import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

import logo1 from "../assets/cards/mc.png";
import logo2 from "../assets/cards/visa_white.png";
import stripe from "../assets/cards/Stripe.png";
import paypal from "../assets/cards/Paypal.jpg";
import portrait1 from "../assets/portraits/1.jpg";
import portrait2 from "../assets/portraits/2.jpg";
import portrait3 from "../assets/portraits/3.jpg";

import { RootStackParamList } from "../navigation/RootNavigation";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeContainer = styled(Container)`
	background-color: ${colors.graylight};
	flex: 1;
	width: 100%;
`;

const Home: FC<Props> = () => {
	const data = [
		{
			id: 1,
			accountNo: "123456789",
			balance: 10000,
			alias: "Work Related",
			logo: logo1,
		},
		{
			id: 2,
			accountNo: "987654321",
			balance: 200000,
			alias: "Personal Work",
			logo: logo2,
		},
		{
			id: 3,
			accountNo: "987654587",
			balance: 300000,
			alias: "School Fees",
			logo: logo2,
		},
		{
        			id: 4,
        			accountNo: "1900987654587",
        			balance: 400000,
        			alias: "COD",
        			logo: stripe,
        },
        {
        			id: 5,
        			accountNo: "20000987654587",
        			balance: 50000,
        			alias: "Deposit",
        			logo: paypal,
        		},

	];

	const transactions = [
		{
			id: 1,
			amount: "-$15000",
			date: "19/11/2023",
			title: "Travel",
			subtitle: "VietnamAirLine",
			art: {
				background: colors.primary,
				icon: "airplane",
			},
		},
		{
			id: 2,
			amount: "-$400",
			date: "19/11/2023",
			title: "Taxi",
			subtitle: "Uber",
			art: {
				background: colors.tertiary,
				icon: "car",
			},
		},
		{
			id: 3,
			amount: "-$1000",
			date: "19/11/2023",
			title: "Shopping",
			subtitle: "Amazon",
			art: {
				background: colors.accent,
				icon: "cart",
			},
		},
		{
        			id: 4,
        			amount: "-$2000",
        			date: "19/11/2023",
        			title: "Eat",
        			subtitle: "BugersKing",
        			art: {
        				background: colors.gray,
        				icon: "restaurant-outline",
        			},
        },
        {
        			id: 5,
        			amount: "-$500",
        			date: "19/11/2023",
        			title: "Energy & Water",
        			subtitle: "Axxon",
        			art: {
        				background: colors.secondary,
        				icon: "water-outline",
        			},
        }];

	const sendMoney = [
		{
			id: 1,
			amount: "$1000",
			name: "John Doe",
			background: colors.tertiary,
			image: portrait1,
		},
		{
			id: 2,
			amount: "$2000",
			name: "Alex Doe",
			background: colors.accent,
			image: portrait2,
		},
		{
			id: 3,
			amount: "$3000",
			name: "Steve Doe",
			background: colors.primary,
			image: portrait3,
		},
	];

	return (
		<HomeContainer>
			<StatusBar style="dark" />
			<CardSection data={data} />
			<TransactionSection data={transactions} />
			<SendMoneySection data={sendMoney} />
		</HomeContainer>
	);
};

export default Home;
