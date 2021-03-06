import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {GameModelClient} from '../../../../shared/models/game/GameModel';

export const GameProvider = (DecoratedComponent) => class GameProvider extends React.Component {
  static contextTypes = {
    game: React.PropTypes.instanceOf(GameModelClient).isRequired
  };

  static displayName = `GameProvider(${DecoratedComponent.displayName})`;

  constructor(props) {
    super(props);
    //todo implement pure with context
    //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const game = this.context.game;
    if (!game) {
      console.error(this.constructor.name, 'game is undefined');
      return null;
    }
    return <DecoratedComponent {...this.props}
      game={game}
    />
  }
};