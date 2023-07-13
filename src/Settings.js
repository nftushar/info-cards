import { useState } from "react";
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import produce from "immer";

import {
	RangeControl, TabPanel, PanelBody, PanelRow, TextControl, __experimentalBoxControl as BoxControl, __experimentalUnitControl as UnitControl, Button, Dashicon, SelectControl, ToggleControl, contentAlign
} from "@wordpress/components";

import "./editor.scss";

// import { getBoxValue } from "../src/utils/function";
import { Label, BColor, Background, BDevice, ColorsControl, InlineMediaUpload, Typography, MultiShadowControl } from "../../Components";

import { gearIcon } from "../../Components/utils/icons";

export default function ({ attributes, setAttributes, updateCard }) {
	const {
		cards, layout, theme, columns, columnGap, rowGap, isImg, imgPos, background, padding, cardPadding, cardShadow, imgHeight, contentPadding, titleColor, titleTypo, descColor, descTypo, btnColors, btnHovColors, btnAlign, btnTypo, btnPadding, cardRadius, btnRadius
	} = attributes;

	console.log(contentPadding);
	const [device, setDevice] = useState("desktop");

	const onAddCard = () => {
		const newCards = [
			...cards,
			{
				background: cards?.[0]?.background || {
					color: '#fff'
				},
				img: "",
				title: `Title of the ${cards?.length + 1} number card`,
				desc: `Description of the ${cards?.length + 1} number card`,
				btnLabal: cards?.[0]?.btnLabal || 'Button',
				btnUrl: "#",
			}
		];
		setAttributes({ cards: newCards });
	};

	function handleCardDelete(index) {
		const newCards = [...cards];
		newCards.splice(index, 1);
		setAttributes({ cards: newCards });
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

	return <InspectorControls>
		<TabPanel
			className="bPlTabPanel"
			activeClass="activeTab"
			tabs={[
				{ name: "general", title: "General" },
				{ name: "style", title: "Style" },
			]}
		>
			{(tab) => <>
				{"general" === tab.name && <>
					<PanelBody
						className="bPlPanelBody"
						title={__("Add or Remove Cards", "info-cards")}
					>
						{cards.map((card, index) => {
							const {
								background,
								img,
								btnLabal,
								btnUrl
							} = card;
							// console.log(card.btnLabal)
							return <PanelBody key={index}
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

								{btnLabal && <Label>{__("Button Url:", "info-cards")}</Label>}
								{btnLabal && <TextControl
									value={btnUrl}
									onChange={(content) =>
										updateCard(index, "btnUrl", content)
									}
								/>}


								<PanelRow className="itemAction mt20">
									{1 < cards?.length && <Button className="removeItem" onClick={() => handleCardDelete(index)}>
										<Dashicon icon="no" /> Delete
									</Button>}

									<Button className="duplicateItem" onClick={(e) => onDuplicateCard(e, index)}>
										{gearIcon} Duplicate
									</Button>
								</PanelRow>
							</PanelBody>
						})}


						<div className="addItem mt15">
							<Button onClick={() => onAddCard()}>
								<Dashicon icon="plus" /> Add New Card
							</Button>
						</div>
					</PanelBody>


					<PanelBody title={__("Layout", "info-cards")} className="bPlPanelBody" initialOpen={false}>
						<SelectControl
							label={__("Layout", "info-cards")}
							labelPosition="left"
							value={layout}

							onChange={(val) => {
								let deskCol = 2;
								if (val == "vertical") {
									deskCol = 3;
								}
								setAttributes({ layout: val, columns: { ...columns, desktop: deskCol } });
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
										cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
										btnColors: { color: "#fff", bg: "#4527a4", },
										btnHovColors: { color: "#fff", bg: "#fe6601", }
									}),
										updateAllCard("background", { color: "#fff" })
									);

								"theme1" === val &&
									(setAttributes({
										columns: { ...columns, desktop: 3 },
										layout: "vertical",
										titleColor: "#000",
										descColor: "#000",
										isImg: true,
										imgPos: "last",
										cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
										btnColors: { color: "#fff", bg: "#4527a4", },
										btnHovColors: { color: "#fff", bg: "#fe6601", }
									}),
										updateAllCard("background", { color: "#fff" })
									);

								"theme2" === val &&
									(setAttributes({
										columns: { ...columns, desktop: 3 },
										layout: "vertical",
										titleColor: "#000",
										descColor: "#000",
										isImg: true,
										imgPos: "first",
										cardPadding: { top: "15px", right: "15px", bottom: "15px", left: "15px" },
										btnColors: { color: "#fff", bg: "#4527a4", },
										btnHovColors: { color: "#fff", bg: "#fe6601", }
									}),
										updateAllCard("background", { color: "#fff" })
									);

								"theme3" === val &&
									(setAttributes({
										columns: { ...columns, desktop: 2 },
										layout: "horizontal",
										titleColor: "#000",
										descColor: "#000",
										isImg: true,
										imgPos: "first",
										cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
										btnColors: { color: "#fff", bg: "#4527a4", },
										btnHovColors: { color: "#fff", bg: "#fe6601", }
									}),
										updateAllCard("background", { color: "#fff" })
									);

								"theme4" === val &&
									(setAttributes({
										columns: { ...columns, desktop: 3 },
										layout: "vertical",
										isImg: true,
										imgPos: "first",
										titleColor: "#fff",
										descColor: "#fff",
										cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
										btnColors: { color: "#fff", bg: "#000", },
										btnHovColors: { color: "#ffffffb3", bg: "#000000b3", }
									}),
										updateAllCard("background", { color: "#570DF8" })
									);

								"theme5" === val &&
									(setAttributes({
										columns: { ...columns, desktop: 3 },
										layout: "vertical",
										isImg: true,
										imgPos: "first",
										titleColor: "#fff",
										descColor: "#fff",
										cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
										btnColors: { color: "#fff", bg: "#000", },
										btnHovColors: { color: "#ffffffb3", bg: "#000000b3", }
									}),
										updateAllCard("background", { color: "#570DF8" })
									);
							}}

							options={[
								{ label: "Default", value: "default" },
								{ label: "Theme 1", value: "theme1" },
								{ label: "Theme 2", value: "theme2" },
								{ label: "Theme 3", value: "theme3" },
								{ label: "Theme 4", value: "theme4" },
								{ label: "Theme 5", value: "theme5" },
							]}
						/>

						<PanelRow className="mt20">
							<Label className="mb5">
								{__("Columns:", "info-cards")}
							</Label>
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
					</PanelBody>


					<PanelBody title={__("Elements", "info-cards")} className="bPlPanelBody" initialOpen={false}>
						<ToggleControl
							label={__("Show Image", "info-cards")}
							checked={isImg}
							onChange={(val) => setAttributes({ isImg: val })}
						/>

						{isImg && <>
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

							<UnitControl
								className="mt20"
								label={__("Image Height", "info-cards")}
								labelPosition="left"
								value={imgHeight}
								onChange={(val) => setAttributes({ imgHeight: val })} />
						</>}
					</PanelBody>
				</>}

				{"style" === tab.name && <>
					<PanelBody className="bPlPanelBody" title={__("Cards", "info-cards")} initialOpen={true}>
						<Background
							label={__("background", "info-cards")}
							defaults={{ color: "#0000" }}
							value={background}
							onChange={(val) => setAttributes({ background: val })} />

						<PanelRow className="mt20">
							<BoxControl
								label={__("Padding", "info-cards")}
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
							label={__("Padding", "info-cards")}
							values={cardPadding}
							resetValues={{
								"top": "0px",
								"right": "0x",
								"bottom": "0px",
								"left": "0px"
							}}
							onChange={(value) => setAttributes({ cardPadding: value })} />

						<UnitControl
							className="mt20"
							label={__("Border radious", "info-cards")}
							labelPosition="left"
							value={cardRadius}
							onChange={(val) => setAttributes({ cardRadius: val })} />

						<MultiShadowControl
							className="mt20"
							value={cardShadow}
							onChange={(val) => setAttributes({ cardShadow: val })}
							produce={produce} />
					</PanelBody>


					{/* Content */}
					<PanelBody initialOpen={false}
						title={__("Content", "info-cards")}
						className="bPlPanelBody">
						<SelectControl
							label={__("Alignment", "info-cards")}
							labelPosition="left"
							value={contentAlign}
							onChange={(val) => setAttributes({ contentAlign: val })}
							options={[
								{ label: "Left", value: "left" },
								{ label: "Center", value: "center" },
								{ label: "Right", value: "right" },
							]}
						/>

						<PanelRow className="mt20">
							<BoxControl
								label={__("Padding", "info-cards")}
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
						</PanelRow>
					</PanelBody>


					<PanelBody className="bPlPanelBody" title={__("Title", "info-cards")} initialOpen={false}>
						<Typography label={__('Typography', 'info-cards')} value={titleTypo} onChange={val => setAttributes({ titleTypo: val })} defaults={{ fontSize: 16 }} produce={produce} />
						{/* <Typography
							label={__("Typography", "info-cards")}
							value={titleTypo}
							onChange={(val) => setAttributes({ titleTypo: val })}
						/> */}

						<BColor
							label={__("Color", "info-cards")}
							value={titleColor}
							onChange={(val) =>
								setAttributes({ titleColor: val })
							}
						/>
					</PanelBody>


					<PanelBody className="bPlPanelBody" title={__("Description", "info-cards")} initialOpen={false}>
						<Typography
							label={__("Typography", "info-cards")}
							value={descTypo}
							onChange={(val) => setAttributes({ descTypo: val })}
						/>

						<BColor
							label={__("Color", "info-cards")}
							value={descColor}
							onChange={(val) =>
								setAttributes({ descColor: val })
							}
						/>
					</PanelBody>


					{/* Button */}
					<PanelBody initialOpen={false} title={__("Button", "info-cards")} className="bPlPanelBody">
						<Typography
							label={__("Typography", "info-cards")}
							value={btnTypo}
							onChange={(val) => setAttributes({ btnTypo: val })}
						/>

						<SelectControl
							className="mt20"
							label={__("Alignment", "info-cards")}
							labelPosition="left"
							value={btnAlign}
							onChange={(val) => setAttributes({ btnAlign: val })}
							options={[
								{ label: "Left", value: "left" },
								{ label: "Center", value: "center" },
								{ label: "Right", value: "right" },
							]}
						/>

						<ColorsControl
							className="mt20"
							label={__("Colors", "info-cards")}
							value={btnColors}
							onChange={(val) => setAttributes({ btnColors: val })}

						/>

						<ColorsControl
							label={__("Hover Colors", "info-cards")}
							value={btnHovColors}
							onChange={(val) => setAttributes({ btnHovColors: val })}

						/>

						<PanelRow className="mt20">
							<BoxControl
								label={__("Padding", "info-cards")}
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

						<UnitControl
							className="mt20"
							label={__("Border Radious", "info-cards")}
							labelPosition="left"
							value={btnRadius}
							onChange={(val) => setAttributes({ btnRadius: val })} />
					</PanelBody>
				</>}
			</>}
		</TabPanel>
	</InspectorControls>
}
