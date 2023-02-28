import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "react";
import Settings from './Settings';
import Cards from "./Components/Cards";

import {
	useBlockProps,
	blockProps,
	RichText,
} from "@wordpress/block-editor";

import "./editor.scss";


export default function ({ attributes, setAttributes, clientId, ...rest }) {
	const { cards, imgPos, isImg } = attributes;

	useEffect(() => {
		clientId && setAttributes({ clientId: clientId })
	}, [clientId]);

	function updateCard(index, property, value) {
		const newCrads = [...cards];
		newCrads[index][property] = value;
		setAttributes({ cards: newCrads });
	}

	return (
		<div {...useBlockProps()}>
			<Settings attributes={attributes} setAttributes={setAttributes} updateCard={updateCard} clientId={clientId} />

			<div className="wp-block-icb-cards" id={`icbCards-${clientId}`}>

				<Cards attributes={attributes} clientId={clientId} >
					{cards.map((card, index) => {
						const { img, title, desc, btnLabal, btnUrl } = card;

						const imgEl = isImg && img && <img src={img} alt={title} />

						return <div className={`card card-${index}`} key={index} >
							{'first' === imgPos && imgEl}

							<div className="content">
								<RichText
									tagName="h2"
									value={title}
									onChange={(content) => updateCard(index, "title", content)}
									placeholder={__("Enter Title", 'info-cards')}
									inlineToolbar
									allowedFormats={["core/bold", "core/italic"]}
								/>

								<RichText
									tagName="p"
									value={desc}
									onChange={(content) => updateCard(index, "desc", content)}
									placeholder={__("Enter Description", 'info-cards')}
									inlineToolbar
									allowedFormats={["core/bold", "core/italic"]}
								/>

								<div className="btnWrapper">
									<RichText
										tagName="a"
										href={btnUrl}
										value={btnLabal}
										onChange={(content) => updateCard(index, "btnLabal", content)}
										placeholder={__("Button", 'info-cards')}
										inlineToolbar
										allowedFormats={["core/bold", "core/italic"]}
									/>
								</div>
							</div>

							{'last' === imgPos && imgEl}
						</div>
					})}
				</Cards>
			</div>
		</div>
	);
}

