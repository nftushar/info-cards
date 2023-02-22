import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "react";

import {
	useBlockProps,
	blockProps,
	RichText,
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	RangeControl,
	Button,
	ColorPalette,
	TabPanel,
	PanelBody,
	PanelRow,
	__experimentalBoxControl as BoxControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";

import "./editor.scss";

import { getBoxValue } from "../src/utils/function";

import BDevice from "../../Components/BDevice";

export default function ({ attributes, setAttributes, clientId }) {
	const { cards, btnPadding, gridColumns, titleTypo, descTypo, contentPadding, columnGap, rowGap, } = attributes;

	useEffect(() => {
		clientId && setAttributes({ cId: clientId })
	}, [clientId]);


	// console.log(clientId);

	const [device, setDevice] = useState("desktop");


	function setTitleTypo(newFontSize) {
		setAttributes({ titleTypo: { ...setTitleTypo, fontSize: newFontSize } });
	}

	function setDescTypo(newFontSize) {
		setAttributes({ descTypo: { ...setDescTypo, fontSize: newFontSize } });
	}

	function setColumnGap(newColumnGap) {
		setAttributes({ columnGap: newColumnGap });
	}

	function setRowGap(newRowGap) {
		setAttributes({ rowGap: newRowGap });
		// setAttributes({ rowGap: { ...setRowGap, rowGap: newRowGap } });
	}

	const handleSubmit = () => {
		const newCrads = [
			...cards,
			{
				background: {
					color: "blue",
				},
				img: "https://greenaromabd.com/wp-content/uploads/2021/04/Scotch-bonnet-peppers.png",
				title: "This Is My Title",
				desc: "This Is My New Description",
				btnLabal: "Button",
				titleColor: "#69f70c",
				descColor: "#69f70c",
				btnUrl: "https://www.google.com/",
				btnColor: {
					color: "#d82e2e",
				},
			},
		];
		setAttributes({ cards: newCrads });
	};

	function updateBtnColor(index, property1, property2, value) {
		const newCrads = [...cards];
		newCrads[index][property1][property2] = value;
		setAttributes({ cards: newCrads });
	}

	function updateCard(index, property, value) {
		const newCrads = [...cards];
		newCrads[index][property] = value;
		setAttributes({ cards: newCrads });
	}

	function handleDelete(index) {
		// console.log("hello");
		const newCrads = [...cards];
		newCrads.splice(index, 1);
		setAttributes({ cards: newCrads });
	}
	// console.log(attributes.columnGap);

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					tabs={[
						{
							name: "Option",
							title: "Option",
							className: "option",
						},
						{
							name: "Style",
							title: "Style",
							className: "style",
						},
					]}
				>
					{(tab) => (
						<div>
							<PanelBody title="Cards">
								<PanelRow>
									<button className="btnAdd" onClick={() => handleSubmit()}>ADD</button>
								</PanelRow>
								{cards.map((card, index) => (
									<>
										{/* {console.log(card.titleColor)} */}

										<PanelBody title={`This is card ${index + 1}`} initialOpen={false}>
											<PanelRow>
												<label>Heading Color</label>
												<ColorPalette
													value={card.titleColor}
													onChange={(content) =>
														updateCard(index, "titleColor", content)
													}
												/>
											</PanelRow>

											<PanelRow>
												<label>Description Color</label>
												<ColorPalette
													value={card.descColor}
													onChange={(content) =>
														updateCard(index, "descColor", content)
													}
												/>
											</PanelRow>

											<PanelRow>
												<label>Button Color</label>
												<ColorPalette
													value={card.btnColor.color}
													onChange={(content) =>
														updateBtnColor(index, "btnColor", "color", content)
													}
												/>
											</PanelRow>

											<PanelRow>
												<button onClick={() => handleDelete()}>Delete</button>
											</PanelRow>

											<PanelRow>
												<MediaUploadCheck>
													<MediaUpload
														onSelect={(content) => {
															updateCard(index, "img", content.url);
															// console.log(content.url);
														}}
														allowedTypes={["image"]}
														value={card.image}
														render={({ open }) => (
															<Button onClick={open}>Add Image</Button>
														)}
													/>
												</MediaUploadCheck>
											</PanelRow>
											<PanelBody>
												<PanelRow>
													<UnitControl
														label="Title Font Size"
														onChange={setTitleTypo}
														value={titleTypo.fontSize}
													/>
												</PanelRow>
												<PanelRow>
													<UnitControl
														label="Desc Font Size"
														onChange={setDescTypo}
														value={descTypo.fontSize}
													/>
												</PanelRow>
											</PanelBody>
										</PanelBody>
									</>

								))}
							</PanelBody>

							<PanelBody title="Layout" >
								<PanelBody>
									<PanelRow>
										{/* <Title className='mb5'>{__('gridColumns:', 'card')}</Title> */}
										<BDevice device={device} onChange={(val) => setDevice(val)} />
									</PanelRow>

									<RangeControl
										value={gridColumns[device]}
										onChange={(val) =>
											setAttributes({
												gridColumns: { ...gridColumns, [device]: val },
											})
										}
										min={1}
										max={6}
										step={1}
										beforeIcon="grid-view"
									/>
									<PanelRow>
										{/* Content Padding */}
										<BoxControl
											label="Contend Paddign"
											// onChange={setContentPadding}
											values={contentPadding}
											onChange={(value) =>
												setAttributes({ contentPadding: value })
											}
										/>
										{/* {console.log(attributes)} */}
									</PanelRow>
									<PanelRow>
										{/* Button Padding */}
										<BoxControl
											label="Button Paddign"
											values={btnPadding}
											onChange={(value) => setAttributes({ btnPadding: value })}
										/>
									</PanelRow>
									<PanelRow>
										<UnitControl
											label="Column Gap"
											onChange={setColumnGap}
											value={columnGap}
										/>
									</PanelRow>
									<PanelRow>
										<UnitControl
											label="Row Gap"
											onChange={setRowGap}
											value={rowGap}
										/>
										{/* {console.log(rowGap)} */}
									</PanelRow>
								</PanelBody>
							</PanelBody>
						</div>
					)}
				</TabPanel>
			</InspectorControls>

			{
				<div className={`main main-${clientId}`}>
					{/* console.log({gridColumns}); */}
					<style>
						{` 
							.main-${clientId}{
								grid-template-columns: repeat(${gridColumns[device]}, auto);
								column-gap: ${columnGap};
								row-gap: ${rowGap};
								padding: ${getBoxValue(btnPadding)};
							}
							.main-${clientId} .container button{
								padding: ${getBoxValue(btnPadding)};
							}
							.main-${clientId}  .container {
								padding: ${getBoxValue(contentPadding)};
							}
						`}
					</style>
					{cards.map((card, index) => (
						<div className={`card card-${index}`} key={index} >
							{/* {console.log(clientId)} */}
							<style>
								{`
									.main-${clientId} .card-${index} .container h2 {
										color: ${card.titleColor};
										font-size: ${titleTypo.fontSize}
									}
									.main-${clientId} .card-${index} .container p {
										color: ${card.descColor};
										font-size: ${descTypo.fontSize}
									}
									.main-${clientId} .card-${index} .container button{
										background-color: ${card.btnColor?.color}
									}
				                `}
							</style>
							{/* {console.log(content.url)} */}
							<img src={card.img} alt="img" />

							<div className="container">
								<RichText
									{...blockProps}
									tagName="h2"
									value={card.title}
									allowedFormats={["core/bold", "core/italic"]}
									// onChange={(content) => handleTitle(content, index)}
									onChange={(content) => updateCard(index, "title", content)}
									placeholder={__("Heading...")}
								/>

								<RichText
									{...blockProps}
									tagName="p"
									value={card.desc}
									allowedFormats={["core/bold", "core/italic"]}
									// onChange={(content) => updateCard(index, 'desc', content)}
									placeholder={__("Description...")}
								/>

								{/* <p>{card.desc}</p> */}
								<button>{card.btnLabal}</button>
							</div>
						</div>



					))}
				</div>
			}
		</div>
	);
}