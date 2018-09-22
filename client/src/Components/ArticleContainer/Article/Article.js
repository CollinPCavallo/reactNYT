import React, {Component} from 'react';
import Modal from 'react-modal'
import './Article.css'

Modal.setAppElement('#root')
class article extends Component {
    
    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }

    render() {
        return(
        <div className='Article'>
            <div className='title'>
            <h4>{this.props.title}</h4>
            <p onClick={this.handleOpenModal}>Read More</p>
            </div>
            <button 
                className='button'
                onClick={this.props.article.headline ? 
                    () => this.props.saveArticle(this.props.article)
                    : () => this.props.deleteArticle(this.props.article._id)}
                    >
                {this.props.article.headline ? 'Save Article' : 'Remove from Saved'}
            </button>
            <div className='fix'></div>
            <Modal
            className='Modal'
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
         >
            <h3>{this.props.article.headline ? this.props.article.headline.main : this.props.article.title}</h3>
            <a target='_blank' href={this.props.article.web_url}>Vist Article</a>
           <button className='closeModal' onClick={this.handleCloseModal}>Close </button>
         </Modal>
            </div>
                )
            }
        }
export default article;