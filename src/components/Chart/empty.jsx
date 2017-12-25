/**
 * Empty Component
 * 用 g2 创建 chart 一开始没有数据，有数据时对当前 chart 更新数据时，会有问题。
 * 因此用了 Empty 作为无数据 chart，PureChart 作为有数据的 chart。
 */
import React from 'react';
import warning from 'warning';

warning(React.PureComponent, '`React.PureComponent` needs React >=15.3.0');

// react 15.3.0 以下不支持 PureComponent 就做一个兼容
export default class Empty extends (React.PureComponent || React.Component) {

  static defaultProps = {
    width: '100%',
    placeholder: <div style={{ position: 'relative', top: '48%', textAlign: 'center' }}>暂无数据</div>,
  }

  render() {
    const { width, height, placeholder } = this.props;

    return <div style={{ width, height }}>{placeholder}</div>;
  }
}
