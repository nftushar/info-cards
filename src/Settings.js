import { useState } from "react";
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import produce from "immer";

import {
	RangeControl,
	TabPanel,
	PanelBody,
	PanelRow,
	TextControl,
	__experimentalBoxControl as BoxControl,
	__experimentalUnitControl as UnitControl,
	Button,
	Dashicon,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";

import "./editor.scss";

// import { getBoxValue } from "../src/utils/function";
import Title from "../../Components/Title";
import BColor from "../../Components/BColor";
import Background from "../../Components/Background";
import ColorsControl from "../../Components/ColorsControl";
import Typography from "../../Components/Typography";
import MultiShadowControl from "../../Components/MultiShadowControl";

import BDevice from "../../Components/BDevice";
import { InlineMediaUpload } from "../../Components/MediaControl";
import { gearIcon } from "../../Components/Helper/icons";

export default function ({ attributes, setAttributes, updateCard }) {
	const {
		cards,
		layout,
		theme,
		columns,
		columnGap,
		rowGap,
		isImg,
		imgPos,
		background,
		padding,
		cardPadding,
		cardShadow,
		imgHeight,
		contentPadding,
		titleAlign,
		titleColor,
		titleTypo,
		descColor,
		descTypo,
		descAlign,
		btnAlign,
		btnTypo,
		btnPadding,
	} = attributes;
	// console.log(attributes.btnLabal)

	const [device, setDevice] = useState("desktop");

	const onAddCard = () => {
		const newCrads = [
			...cards,
			{
				background: {
					color: "#fff",
				},
				img: "https://thumbs.dreamstime.com/b/two-lorikeet-birds-2293918.jpg",
				title: "This Is My Title",
				titleColor: "#69f70c",
				desc: "This Is My New Descriptionz",
				descColor: "#69f70c",
				btnLabal: "Button",
				btnUrl: "https://www.google.com",
				btnColors: {
					color: "#fff",
					bg: "#4527a4",
				},
				btnHovColors: {
					color: "#fff",
					bg: "#fe6601",
				},
			},
		];
		setAttributes({ cards: newCrads });
	};

	function handleCardDelete(index) {
		const newCrads = [...cards];
		newCrads.splice(index, 1);
		setAttributes({ cards: newCrads });
	}

	const onDuplicateCard = (e, index) => {
		e.preventDefault();
		const newCards = [...cards];
		newCards.splice(index, 0, cards[index]);
		setAttributes({ cards: newCards });
	};

	const updateAllCard = (property, value) => {
		const newCards = [...cards];

		newCards.map((social, index) => {
			newCards[index][property] = value;
		});
		setAttributes({ cards: newCards });
	};

	return (
		<InspectorControls>
			<TabPanel
				className="bPlTabPanel"
				activeClass="activeTab"
				tabs={[
					{ name: "general", title: "General" },
					{ name: "style", title: "Style" },
				]}
			>
				{(tab) => (
					<>
						{"general" === tab.name && (
							<>
								<PanelBody
									className="bPlPanelBody"
									title={__("Add or Remove Cards", "info-cards")}
								>
									{cards.map((card, index) => {
										const {
											background,
											img,
											btnLabal,
											descColor,
											btnUrl,
											btnHovColors,
											btnColors,
										} = card;
										// console.log(card.btnLabal)
										return (
											<PanelBody
												className="bPlPanelBody"
												title={`This is card ${index + 1}`}
												initialOpen={false}
											>
												<Background
													label={__("Background", "info-cards")}
													value={background}
													onChange={(val) =>
														updateCard(index, "background", val)
													}
													isImage={false}
												/>

												{isImg && <InlineMediaUpload
													value={img}
													onChange={(val) => updateCard(index, "img", val)}
													placeholder={__("Enter Image URL", "info-cards")}
												/>}

												{/* <BColor
													label={__("Description Color", "info-cards")}
													value={descColor}
													onChange={(val) =>
														updateCard(index, "descColor", val)
													}
												/> */}

												{btnLabal && <Title>{__("Button Url:", "info-cards")}</Title>}
												{btnLabal && <TextControl
													value={btnUrl}
													onChange={(content) =>
														updateCard(index, "btnUrl", content)
													}
												/>}

												{btnLabal && <ColorsControl
													label={__("Button Colors", "info-cards")}
													value={btnColors}
													onChange={(val) =>
														updateCard(index, "btnColors", val)
													}
												/>}

												{btnLabal && <ColorsControl
													label={__("Button Hover Colors", "info-cards")}
													value={btnHovColors}
													onChange={(val) =>
														updateCard(index, "btnHovColors", val)
													}
												/>}

												<PanelRow className="itemAction mt20">
													{1 < cards?.length && (
														<Button
															className="removeItem"
															onClick={() => handleCardDelete(index)}
														>
															<Dashicon icon="no" /> Delete
														</Button>
													)}

													<Button
														className="duplicateItem"
														onClick={(e) => onDuplicateCard(e, index)}
													>
														{gearIcon} Duplicate
													</Button>
												</PanelRow>
											</PanelBody>
										);
									})}

									<div className="addItem mt15">
										<Button onClick={() => onAddCard()}>
											<Dashicon icon="plus" /> Add New Card
										</Button>
									</div>
								</PanelBody>

								<PanelBody
									title={__("Layout", "info-cards")}
									className="bPlPanelBody"
								>

									<SelectControl
										label={__("Layout", "info-cards")}
										labelPosition="left"
										value={layout}

										onChange={(val) => {
											let deskCol = 2;
											if (val == "vertical") {
												deskCol = 3;
											}

											setAttributes({ layout: val, columns: { ...columns, desktop: deskCol }, });
										}}
										options={[
											{ label: "Vertical", value: "vertical" },
											{ label: "Horizontal", value: "horizontal" },
										]}
									/>

									<SelectControl
										className="mt20"
										label={__("Theme", "info-cards")}
										labelPosition="left"
										value={theme}
										onChange={(val) => {
											setAttributes({ theme: val });

											"default" === val &&
												(setAttributes({
													columns: { ...columns, desktop: 3 },
													layout: "vertical",
													titleColor: "#000",
													descColor: "#000",
													isImg: true,
													imgPos: "first",
													cardPadding: {
														top: "0",
														right: "0",
														bottom: "0",
														left: "0",
													},
												}),
													updateAllCard("background", { color: "#fff" }),
													updateAllCard("btnColors", {
														color: "#fff",
														bg: "#4527a4",
													}),
													updateAllCard("btnHovColors", {
														color: "#fff",
														bg: "#fe6601",
													}));

											"theme1" === val &&
												(setAttributes({
													columns: { ...columns, desktop: 3 },
													layout: "vertical",
													titleColor: "#000",
													descColor: "#000",
													isImg: true,
													imgPos: "last",
													cardPadding: {
														top: "0",
														right: "0",
														bottom: "0",
														left: "0",
													},
												}),
													updateAllCard("background", { color: "#fff" }),
													updateAllCard("btnColors", {
														color: "#fff",
														bg: "#4527a4",
													}),
													updateAllCard("btnHovColors", {
														color: "#fff",
														bg: "#fe6601",
													}));

											"theme2" === val &&
												(setAttributes({
													columns: { ...columns, desktop: 3 },
													layout: "vertical",
													titleColor: "#000",
													descColor: "#000",
													isImg: true,
													imgPos: "first",
													cardPadding: {
														top: "15px",
														right: "15px",
														bottom: "15px",
														left: "15px",
													},
												}),
													updateAllCard("background", { color: "#fff" }),
													updateAllCard("btnColors", {
														color: "#fff",
														bg: "#4527a4",
													}),
													updateAllCard("btnHovColors", {
														color: "#fff",
														bg: "#fe6601",
													}));

											"theme3" === val &&
												(setAttributes({
													columns: { ...columns, desktop: 2 },
													layout: "horizontal",
													titleColor: "#000",
													descColor: "#000",
													isImg: true,
													imgPos: "first",
													cardPadding: {
														top: "0",
														right: "0",
														bottom: "0",
														left: "0",
													},
												}),
													updateAllCard("background", { color: "#fff" }),
													updateAllCard("btnColors", {
														color: "#fff",
														bg: "#4527a4",
													}),
													updateAllCard("btnHovColors", {
														color: "#fff",
														bg: "#fe6601",
													}));

											"theme4" === val &&
												(setAttributes({
													columns: { ...columns, desktop: 3 },
													layout: "vertical",
													isImg: true,
													imgPos: "first",
													titleColor: "#fff",
													descColor: "#fff",
													cardPadding: {
														top: "0",
														right: "0",
														bottom: "0",
														left: "0",
													},
												}),
													updateAllCard("background", { color: "#570DF8" }),
													updateAllCard("btnColors", {
														color: "#fff",
														bg: "#570DF8",
													}),
													updateAllCard("btnHovColors", {
														color: "#ffffffb3",
														bg: "#000000b3",
													}));
										}}
										options={[
											{ label: "Default", value: "default" },
											{ label: "Theme 1", value: "theme1" },
											{ label: "Theme 2", value: "theme2" },
											{ label: "Theme 3", value: "theme3" },
											{ label: "Theme 4", value: "theme4" },
										]}
									/>

									<PanelRow className="mt20">
										<Title className="mb5">
											{__("Columns:", "info-cards")}
										</Title>
										<BDevice
											device={device}
											onChange={(val) => setDevice(val)}
										/>
									</PanelRow>
									<RangeControl
										value={columns[device]}
										onChange={(val) => {
											setAttributes({ columns: { ...columns, [device]: val } });
										}}
										min={1}
										max={6}
										step={1}
										beforeIcon="grid-view"
									/>

									<UnitControl
										className="mt20"
										label={__("Column Gap", "info-cards")}
										labelPosition="left"
										value={columnGap}
										onChange={(val) => setAttributes({ columnGap: val })}
									/>

									<UnitControl
										className="mt20"
										label={__("Row Gap", "info-cards")}
										labelPosition="left"
										value={rowGap}
										onChange={(val) => setAttributes({ rowGap: val })}
									/>

									<ToggleControl
										className="mt20"
										label={__("Show Image", "info-cards")}
										checked={isImg}
										onChange={(val) => setAttributes({ isImg: val })}
									/>

									{isImg && (
										<SelectControl
											className="mt20"
											label={__("Image Position", "info-cards")}
											labelPosition="left"
											value={imgPos}
											onChange={(val) => setAttributes({ imgPos: val })}
											options={[
												{
													label: "vertical" === layout ? "Top" : "Left",
													value: "first",
												},
												{
													label: "vertical" === layout ? "Bottom" : "Right",
													value: "last",
												},
											]}
										/>
									)}
								</PanelBody>
							</>
						)}

						{"style" === tab.name && (
							<>
								{/* Cards */}
								<PanelBody initialOpen={true}
									title={__("Cards", "info-cards")}
									className="bPlPanelBody">

									<Background
										label={__("background", "info-cards")}
										defaults={{ color: "#0000" }}
										value={background}
										onChange={(val) => setAttributes({ background: val })} />

									<PanelRow className="mt20">
										<BoxControl
											label={__("Paddign", "info-cards")}
											values={padding} 
											resetValues={{
												"top": "0px",
												"right": "0x",
												"bottom": "0px",
												"left": "0px"
											}}
											onChange={(value) => setAttributes({ padding: value })} />

									</PanelRow>
								</PanelBody>

								{/* Card */}
								<PanelBody initialOpen={false}
									title={__("Card", "info-cards")}
									className="bPlPanelBody">

									<BoxControl
										label={__("Card Paddign", "info-cards")}
										values={cardPadding}
										resetValues={{
											"top": "0px",
											"right": "0x",
											"bottom": "0px",
											"left": "0px"
										}}
										onChange={(value) => setAttributes({ cardPadding: value })} />

									<MultiShadowControl
										className="mt20"
										value={cardShadow}
										onChange={(val) => setAttributes({ cardShadow: val })}
										produce={produce} />

									<UnitControl
										className="mt20"
										label={__("Image Height", "info-cards")}
										labelPosition="left"
										value={imgHeight}
										onChange={(val) => setAttributes({ imgHeight: val })} />
								</PanelBody>

								{/* Content */}
								<PanelBody initialOpen={false}
									title={__("Content", "info-cards")}
									className="bPlPanelBody"  >
									<BoxControl
										label={__("Content Paddign", "info-cards")}
										values={contentPadding}
										resetValues={{
											"top": "0px",
											"right": "0x",
											"bottom": "0px",
											"left": "0px"
										}}
										onChange={(value) =>
											setAttributes({ contentPadding: value })
										}
									/>
									<BColor
										label={__("Title Color", "info-cards")}
										value={titleColor}
										onChange={(val) =>
											setAttributes({ titleColor: val })
										}
									/>
									<BColor
										label={__("Description Color", "info-cards")}
										value={descColor}
										onChange={(val) =>
											setAttributes({ descColor: val })
										}
									/>
									<SelectControl
										className="mt20"
										label={__("Title Align", "info-cards")}
										labelPosition="left"
										value={titleAlign}
										onChange={(val) => setAttributes({ titleAlign: val })}
										options={[
											{ label: "Left", value: "left" },
											{ label: "Center", value: "center" },
											{ label: "Right", value: "right" },
										]}
									/>
									{/* descAlign */}
									<Typography
										className="mt20"
										label={__("Title Typography", "info-cards")}
										value={titleTypo}
										onChange={(val) => setAttributes({ titleTypo: val })}
									/>

									<Typography
										className="mt20"
										label={__("Description Typography", "info-cards")}
										value={descTypo}
										onChange={(val) => setAttributes({ descTypo: val })}
									/>
									<SelectControl
										className="mt20"
										label={__("Description Align", "info-cards")}
										labelPosition="left"
										value={descAlign}
										onChange={(val) => setAttributes({ descAlign: val })}
										options={[
											{ label: "Left", value: "left" },
											{ label: "Center", value: "center" },
											{ label: "Right", value: "right" },
										]}
									/>
								</PanelBody>

								{/* Button */}
								<PanelBody initialOpen={false}
									title={__("Button", "info-cards")}
									className="bPlPanelBody"
								>
									<SelectControl
										className="mt20"
										label={__("Align", "info-cards")}
										labelPosition="left"
										value={btnAlign}
										onChange={(val) => setAttributes({ btnAlign: val })}
										options={[
											{ label: "Left", value: "left" },
											{ label: "Center", value: "center" },
											{ label: "Right", value: "right" },
										]}
									/>

									<Typography
										className="mt20"
										label={__("Typography", "info-cards")}
										value={btnTypo}
										onChange={(val) => setAttributes({ btnTypo: val })}
									/>

									<PanelRow className="mt20">
										<BoxControl
											label={__("Button Paddign", "info-cards")}
											values={btnPadding}
											resetValues={{
												"top": "0px",
												"right": "0x",
												"bottom": "0px",
												"left": "0px"
											}}
											onChange={(value) => setAttributes({ btnPadding: value })}
										/>
									</PanelRow>
								</PanelBody>
							</>
						)}
					</>
				)}
			</TabPanel>
		</InspectorControls>
	);
}
