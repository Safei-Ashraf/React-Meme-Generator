import React, { Component } from 'react'

export default class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
            topText:'',
            bottomText:'',
            randomImage:'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes').then(resp => resp.json()).then(res => this.setState({allMemeImgs: res.data.memes}))
    }
    handleChange= (e)=>{
        const  {name, value} = e.target;
        this.setState({[name]: value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const randomIndex = Math.floor((Math.random()*this.state.allMemeImgs.length));
       const randomImg = this.state.allMemeImgs[randomIndex].url;
       this.setState({randomImage:randomImg})

    }
    
    render() {

        return (
            <>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                
                    <button type="submit">Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText} </h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </>
        )
    }
}
