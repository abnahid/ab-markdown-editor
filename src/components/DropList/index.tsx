import React from 'react';

interface DropListProps {
  show: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

class DropList extends React.Component<DropListProps, any> {
  constructor(props: DropListProps) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    const { onClose } = this.props;
    if (typeof onClose === 'function') {
      onClose();
    }
  }

  render() {
    return (
      <div className={`drop-wrap ${this.props.show ? 'show' : 'hidden'}`} onClick={this.handleClose}>
        {this.props.children}
      </div>
    );
  }
}

export default DropList;
