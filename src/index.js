import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import Edit from './edit';
import './style.scss';

registerBlockType(metadata, {
	edit: Edit,
	icon: <svg fill="#4527a4" width="800px" height="800px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
		<g opacity="0.2">
			<path d="M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.10046,144a24,24,0,1,1,24-24A23.99994,23.99994,0,0,1,92.10046,144Z" />
		</g>
		<g>
			<path d="M192,104H152a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z" />
			<path d="M192,136H152a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z" />
			<path d="M114.47949,142.84375a31.99995,31.99995,0,1,0-44.75793,0,39.89549,39.89549,0,0,0-16.36023,23.16162,8.00008,8.00008,0,1,0,15.49512,3.98828,24.01011,24.01011,0,0,1,46.48779-.00146,8.0002,8.0002,0,1,0,15.49512-3.98926A39.89782,39.89782,0,0,0,114.47949,142.84375ZM76.10059,120a16,16,0,1,1,16,16A16.01833,16.01833,0,0,1,76.10059,120Z" />
			<path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40Zm0,160H40V56H216l.01025,143.99951Z" />
		</g>
	</svg>,
	save: () => null
});
