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
	const { cards } = attributes;

	useEffect(() => {
		clientId && setAttributes({ clientId: clientId })
	}, [clientId]);

	const [device, setDevice] = useState("desktop");

	return (
		<div {...useBlockProps()}>
			<Settings attributes={attributes} setAttributes={setAttributes} clientId={clientId} />

			<div className="wp-block-icb-cards" id={`icbCards-${clientId}`}>

				<Cards attributes={attributes} clientId={clientId} >
					{cards.map((card, index) => (
						<div className={`card card-${index}`} key={index} >
							<img src={card.img} alt="img" />
							<div className="content">
								<RichText
									{...blockProps}
									tagName="h2"
									value={card.title}
									allowedFormats={["core/bold", "core/italic"]}
									onChange={(content) => updateCard(index, "title", content)}
									placeholder={__("Heading...")}
								/>

								<RichText
									{...blockProps}
									tagName="p"
									value={card.desc}
									allowedFormats={["core/bold", "core/italic"]}
									onChange={(content) => updateCard(index, 'desc', content)}
									placeholder={__("Description...")}
								/>
								<form>
									<button>{card.btnLabal}</button>
								</form>
							</div>
						</div>
					))}
				</Cards>
			</div>
		</div>
	);
}

