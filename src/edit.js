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
	const { cards, imgPos } = attributes;

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

						return <div className={`card card-${index}`} key={index} >
							{img && 'first' === imgPos && <img src={img} alt={title} />}

							<div className="content">
								<RichText
									{...blockProps}
									tagName="h2"
									value={title}
									allowedFormats={["core/bold", "core/italic"]}
									onChange={(content) => updateCard(index, "title", content)}
									placeholder={__("Heading...")}
									inlineToolbar
								/>

								<RichText
									{...blockProps}
									tagName="p"
									value={desc}
									allowedFormats={["core/bold", "core/italic"]}
									onChange={(content) => updateCard(index, "desc", content)}
									placeholder={__("Description...")}
									inlineToolbar
								/>

								<div className="btnWrapper">
									<RichText
										{...blockProps}
										tagName="a"
										value={btnLabal}
										href={btnUrl}
										allowedFormats={["core/bold", "core/italic"]}
										onChange={(content) => updateCard(index, "btnLabal", content)}
										inlineToolbar
									/>
								</div>
							</div>

							{img && 'last' === imgPos && <img src={img} alt={title} />}
						</div>
					})}
				</Cards>
			</div>
		</div>
	);
}

