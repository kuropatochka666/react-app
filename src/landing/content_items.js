import React, {makeStyles, Colours , useEffect} from 'react';
import Button from '@material-ui/core/Button';
// import Modal from './modal';
import { Dialog, DialogContent,DialogContentText } from '@material-ui/core';



export default function Items({todo, index, colorCat}){

  // class Application extends React.Component {
  //   constructor(props) {
  //     super(props);
  
  //     this.state = { x: 0, y: 0 };
  //   }
  
  //   _onMouseMove(e) {
  //     this.setState({ x: e.screenX, y: e.screenY });
  //   }
   
  //   render() {
  //     const { x, y } = this.state;
  //     const styles1 = {
  //       posXY:{
  //         right: -x,
  //         top: y,
         
  //       }
  //     };
  //     const A = document.querySelector('.MuiPaper-root.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.MuiPaper-elevation24.MuiPaper-rounded');
      
  //     return <div><div onMouseMove={this._onMouseMove.bind(this)}>
  //   {console.log(x ,y, A)}
  //       <Button onClick={hadnleClickOpen} style={styles.button}></Button>
           
  //     </div>
      
  //       <Dialog open={open} onClose={handleClose} className="" hideBackdrop  classes={{ root: styles.root }} >
          
  //       <DialogContent style={ styles1.posXY}>
  //           <DialogContentText className="" >Изменить </DialogContentText>
  //           <DialogContentText className="">Перевести в пациента</DialogContentText>
  //           <DialogContentText className="">Удалить</DialogContentText>
  //       </DialogContent>
  //   </Dialog>
  
  //   </div>;
      
  //   }
    
  // }







  class AppMod extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { x: 0, y: 0 };
    }
  
    _onMouseMove(e) {
      this.setState({ x: e.screenX, y: e.screenY });
    }
    state = {
      modal: false,
      modalInfo: "",
    }
  
    selectModal = (info = "") => {
      this.setState({
        modal: !this.state.modal,
        modalInfo: info
      })
    } 
  
    render() {
      const { x, y } = this.state;
      {console.log(x ,y)}

      // const styles1 = {
      //   posXY:{
      //     left: x,
      //     top: y
         
      //   } 
      // }

      return (
        
        <div className="App" onMouseMove={this._onMouseMove.bind(this)}>
          {/* {console.log(";jgsdad",this.state.x)} */}
            <div onClick={ () => this.selectModal('Modal A') }>
              .
            </div>

            <Modal 
              displayModal={this.state.modal}
              modalInfo={this.state.modalInfo}
              closeModal={this.selectModal}
              positionX ={this.state.x}
              positionY = {this.state.y}
              
              
            />
        </div>
      );
    }
  }
  const Modal = props => {
    const style3 = {
      posXY:{
        left: props.positionX-32,
        top: props.positionY-100,
      }
    }
    function displayInfo () {
      switch(props.modalInfo) {
        case 'Modal A':
          return (
          <div>
          <div className="modal-info modal-item1" >Изменить</div>
          {/* {console.log("привет: ", props.positionY, props.positionX)} */}
          <div className="modal-info modal-item2">Перевести в пациента</div>
          <div className="modal-info modal-item3">Удалить</div>
          </div>
          )
        case 'Modal B':
          return <div className="modal-info">Modal 2</div>
        default:
          return null
      }
    }
  
    function closeModal(e) {
      e.stopPropagation()
      props.closeModal()
    }
    
    const divStyle = {
      display: props.displayModal ? 'block' : 'none',
    };
   
  
      return (
        <div 
          className="modal"
          onClick={ closeModal }
          style={divStyle}>
  
          <div className="modal-content" 
            onClick={ e => e.stopPropagation() }
            style={ style3.posXY }
            >
            
            {/* <span 
              className="close"
              onClick={ closeModal }>&times;
            </span> */}
  
            <div className="modal-flex">
              {displayInfo()}
            </div>
  
          </div>
  
        </div>
      );
  }










  



































    const [open, setOpen] = React.useState(false);

    const hadnleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
   

    // useEffect(() => {
    //     const htmlElement = document.querySelector('body');
    //     if (open && !htmlElement.classList.contains('overflow-hidden')) {
    //     htmlElement.classList.add('overflow-hidden');
    //     } else {
    //     htmlElement.classList.remove('overflow-hidden');
    //     }
    // }, []);

    // useEffect(() => {
    //     const htmlElement = document.querySelector('body');
    //     if (open && !htmlElement.classList.contains('overflow-hidden')) {
    //     htmlElement.classList.add('overflow-hidden');
    //     } else {
    //     htmlElement.classList.remove('overflow-hidden');
    //     }
    // }, [open]);
    
    // const styles = {
    //     root: {

    //         position: 'absolute',
    //         boxShadow: 'none',
            
    //       },
    //       button:{
    //         width: '20px',
    //         height: '12px',
    //         padding: '0',
    //         minWidth: '0',
    //         zIndex:'10000',
    //       },

       
          
    // };
 
    return(
        <li className="content__users__items">
            <div className="content__users__item--1">
            {index+1}
            </div>
            
            <div className="content__users__item--menu">
              
         
            <AppMod ></AppMod>
                
            </div>
            <div className="content__users__item--2">
            {todo.title}
            </div>
            <div className="content__users__item--3">
            {todo.contacts}
           
            </div>
            <div className="content__users__item--4">
            {todo.source}
            </div>
            <div className="content__users__item--5">
            {todo.cause}
            </div>
            <div className={colorCat} id="categories" >
            {todo.category }
            
            </div>
            
        

        </li>
        

    );
}







