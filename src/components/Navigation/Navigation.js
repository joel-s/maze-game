/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Piaggio Fast Forward, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/maze">
          Play the Maze
        </Link>
        <span className={s.spacer}> | </span>
        <span className={s.spacer}>or</span>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
