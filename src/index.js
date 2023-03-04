import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import Edit from './Edit';
import './style.scss';
import { cardIcon } from './utils/icons';

registerBlockType(metadata, {
	edit: Edit,
	icon: cardIcon,
	save: () => null
});
