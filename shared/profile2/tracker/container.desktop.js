// @flow
// Only used for storybook, maybe get rid of this
import * as Container from '../../util/container'
import Tracker from './index.desktop'
import * as Constants from '../../constants/profile2'

type OwnProps = {|
  username: string,
|}

const mapStateToProps = (state, ownProps) => {
  const d = state.profile2.usernameToDetails.get(ownProps.username, Constants.noDetails)
  return {
    _assertions: d.assertions,
    bio: d.bio,
    followThem: d.followThem,
    followersCount: d.followersCount,
    followingCount: d.followingCount,
    followsYou: d.followsYou,
    guiID: d.guiID,
    location: d.location,
    publishedTeams: d.publishedTeams,
    reason: d.reason,
    state: d.state,
  }
}
const mapDispatchToProps = dispatch => ({
  onAccept: () => {},
  onChat: () => {},
  onClose: () => {},
  onFollow: () => {},
  onIgnoreFor24Hours: () => {},
})
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    assertionKeys: stateProps._assertions ? stateProps._assertions.keySeq().toArray() : null,
    bio: stateProps.bio,
    followThem: stateProps.followThem,
    followersCount: stateProps.followersCount,
    followingCount: stateProps.followingCount,
    followsYou: stateProps.followsYou,
    guiID: stateProps.guiID,
    location: stateProps.location,
    onAccept: dispatchProps.onAccept,
    onChat: dispatchProps.onChat,
    onClose: dispatchProps.onClose,
    onFollow: dispatchProps.onFollow,
    onIgnoreFor24Hours: dispatchProps.onIgnoreFor24Hours,
    publishedTeams: stateProps.publishedTeams,
    reason: stateProps.reason,
    state: stateProps.state,
    username: ownProps.username,
  }
}

export default Container.namedConnect<OwnProps, _, _, _, _>(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  'Tracker2'
)(Tracker)