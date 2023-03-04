<?php
/**
 * Plugin Name:       Info Cards
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       info-cards
 *
 * @package           create-block
 */

function create_block_card_block_init() {
    register_block_type( __DIR__ . "/build", [
        "render_callback" => function ( $attributes ) {
            extract( $attributes );

            $blockClassName = 'wp-block-icb-cards ' . $className . ' align' . $align;
        
            ob_start(); ?>
            <div class="<?php echo esc_attr( $blockClassName ); ?>" id='icbCards-<?php echo esc_attr( $clientId ); ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

            <?php return ob_get_clean();
        }
    ] );
}
add_action("init", "create_block_card_block_init");