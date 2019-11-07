import React from 'react';
import Modal from 'react-modal';
import "./style.css"
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
 
class ModalContainer extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div className="mo">
        <button className="modal-btn btn btn-outline-dark" onClick={this.openModal}>More Details...</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.book.title}</h2>
          <div>
            <img src={this.props.book.image.thumbnail}/>
            <p>Description: {this.props.book.description}</p>
            <a href={this.props.book.link}>See it at Google</a>
            <button style={{float: 'right'}} onClick={this.closeModal}>close</button>

          </div>

        </Modal>
      </div>
    );
  }
}
 
export default ModalContainer;
