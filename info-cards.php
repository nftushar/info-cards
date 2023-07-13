<?php
/**
 * Plugin Name:       Info Cards
 * Description:       Info Cards block plugin for wordpress website.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       info-cards
 *
 * @package           create-block
 */

if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'ICB_VERSION', 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'ICB_DIR', plugin_dir_url( __FILE__ ) );

function icbCardsEnqueueBlockAssets(){
    wp_register_style( 'icb-cards-style', ICB_DIR . 'dist/style.css', [], ICB_VERSION );
}
add_action("enqueue_block_assets", "icbCardsEnqueueBlockAssets");

function icbCardsInit() {
    wp_register_style( 'icb-cards-editor-style', ICB_DIR . 'dist/editor.css', [ 'icb-cards-style' ], ICB_VERSION ); // Backend Style

    register_block_type( __DIR__, [
		'editor_style'      => 'icb-cards-editor-style',
        "render_callback"   => function ( $attributes ) {
            extract( $attributes );

            wp_enqueue_style( 'icb-cards-style' );
            wp_enqueue_script( 'icb-cards-script', ICB_DIR . 'dist/script.js', [ 'react', 'react-dom' ], ICB_VERSION );

            $blockClassName = 'wp-block-icb-cards ' . $className . ' align' . $align;
        
            ob_start(); ?>
            <div class="<?php echo esc_attr( $blockClassName ); ?>" id='icbCards-<?php echo esc_attr( $clientId ); ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

            <?php return ob_get_clean();
        }
    ] );

	wp_set_script_translations( 'icb-cards-editor-script', 'info-cards', plugin_dir_path( __FILE__ ) . 'languages' ); // Translate
}
add_action("init", "icbCardsInit");