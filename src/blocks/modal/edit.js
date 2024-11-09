/**
 * WordPress dependencies.
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies.
 */
import Rsvp from '../../components/Rsvp';
import { getFromGlobal } from '../../helpers/globals';
import EditCover from '../../components/EditCover';

/**
 * Edit component for the GatherPress RSVP block.
 *
 * This component renders the edit view of the GatherPress RSVP block.
 * It provides an interface for users to respond to the RSVP for the associated event.
 * The component includes the RSVP component and passes the event ID, current user,
 * and type of RSVP as props.
 *
 * @since 1.0.0
 *
 * @return {JSX.Element} The rendered React component.
 */
const Edit = () => {
	const blockProps = useBlockProps();
	const postId = getFromGlobal('eventDetails.postId');
	const currentUser = getFromGlobal('eventDetails.currentUser');
	const TEMPLATE = [
		['core/buttons', { align: 'center', layout: { type: 'flex', justifyContent: 'center' } }, [
			['core/button', { text: 'RSVP' }]
		]]
	];
	return (
		<div {...blockProps}>
			<InnerBlocks />
		</div>
	);
};

export default Edit;
