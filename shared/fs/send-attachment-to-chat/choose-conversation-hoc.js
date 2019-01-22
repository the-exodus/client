// @flow
import * as FsGen from '../../actions/fs-gen'
import * as ChatTypes from '../../constants/types/chat2'
import * as ChatConstants from '../../constants/chat2'
import {namedConnect} from '../../util/container'

const mapStateToProps = state => ({
  _conv: state.chat2.metaMap.get(state.fs.sendAttachmentToChat.convID),
  _sendAttachmentToChat: state.fs.sendAttachmentToChat,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelect: (convID: ChatTypes.ConversationIDKey) =>
    dispatch(FsGen.createSetSendAttachmentToChatConvID({convID})),
  onSetFilter: (filter: string) => dispatch(FsGen.createSetSendAttachmentToChatFilter({filter})),
})

// Temporary until we make proper component for dropdown button content.
const getConversationText = (conv: ChatTypes.ConversationMeta): string => {
  if (conv.teamType === 'big') {
    return conv.teamname + '#' + conv.channelname
  }
  if (conv.teamType === 'small') {
    return conv.teamname
  }
  return ChatConstants.getRowParticipants(conv, '')
    .toArray()
    .join(',')
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  filter: stateProps._sendAttachmentToChat.filter,
  onSelect: dispatchProps.onSelect,
  onSetFilter: dispatchProps.onSetFilter,
  selected: stateProps._sendAttachmentToChat.convID,
  selectedText: stateProps._conv ? getConversationText(stateProps._conv) : 'Choose a conversation',
})

// TODO: type this
export default namedConnect<any, _, any, _, _>(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  'ChooseConversationHOC'
)
