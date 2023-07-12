import { useEffect } from "react";
import Settings from './Settings';
import { useBlockProps } from "@wordpress/block-editor";

import Cards from "./Components/Backend/Cards";
import "./editor.scss";
import Style from "./Style";

export default function ({ attributes, setAttributes, clientId }) {
	const { layout, columns, cards } = attributes;

	useEffect(() => {
		clientId && setAttributes({ clientId })
	}, [clientId]);

	function updateCard(index, property, value) {
		const newCards = [...cards];
		newCards[index][property] = value;
		setAttributes({ cards: newCards });
	}

	return (
		<div {...useBlockProps()}>
			<Settings attributes={attributes} setAttributes={setAttributes} updateCard={updateCard} clientId={clientId} />

			<div className="wp-block-icb-cards" id={`icbCards-${clientId}`}>
				<Style attributes={attributes} clientId={clientId} />

				<Cards attributes={attributes} clientId={attributes.clientId} updateCard={updateCard} />
			</div>
		</div>
	);
}

