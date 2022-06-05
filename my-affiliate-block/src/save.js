/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
 const Save = ( props ) => {
	const {
		attributes: { content, title, mediaURL },
	} = props;
	const blockProps = useBlockProps.save();
	
	return (
		<div { ...blockProps }>
			<RichText.Content tagName="h2" value={ title } />

			<div class="media-image-container">

				{ mediaURL && (
					<img
						className="recipe-image"
						src={ mediaURL }
						alt={ __( 'Recipe Image', 'gutenberg-examples' ) }
					/>
				) }

			</div>

			<RichText.Content { ...blockProps } tagName="p" value={ content } />
		</div>
	);
};
export default Save;
