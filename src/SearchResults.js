import React from 'react'
import axios from 'axios'
import Photos from './Photos'
import logo from './images/logo.jpg'


// access key: mECxJaXCkiB_oXL7K_3FsXnrG9q_RxzLLbbbSOzEmmI
// secret key : nxQufv3JMxk3igkLGhM8XvS6Tg3fiuUF2msDkThMTto



class  SearchResults extends React.Component{
constructor(){
    super()
    this.state = {
        data:[],
        searchTerm:"",
        images:[],
        searchImage:""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
}

   async componentDidMount(){
        const response = await axios.get('https://api.unsplash.com/photos',{
            params:{
                client_id :'mECxJaXCkiB_oXL7K_3FsXnrG9q_RxzLLbbbSOzEmmI'
            }
        })
        // console.log(response.data)
        this.setState({...this.state,
            data : response.data
        })
        // console.log(this.state)
        
        const imagesToShow = response.data.map((result)=>{
            return result.urls.raw
        })

        // let downloadLinks = this.props.data.map((result)=>{
        //     return result.links.download_location
        // })
                
         this.setState({...this.state,
            images:imagesToShow
        })
        // console.log(this.state)
    }

    async componentDidUpdate(prevProps, prevState){
        // console.log('sending search request')
        // console.log("prevstate: "+prevState.searchImage)
        // console.log("thisState: "+this.state.searchImage)
        if(prevState.searchImage!==this.state.searchImage)
        {
            // console.log(`${this.state.searchImage} will load now`)
            const response = await axios.get('https://api.unsplash.com/search/photos',{
                params:{
                    query : this.state.searchImage,
                    client_id :'mECxJaXCkiB_oXL7K_3FsXnrG9q_RxzLLbbbSOzEmmI'
                }  
            })
            // console.log(response.data)
            this.setState({...this.state,
                data : response.data
            })
            // console.log(this.state)

            const imagesToShow = response.data.results.map((result)=>{
                return result.urls.raw
            })
             this.setState({...this.state,
                images:imagesToShow
            })
            // console.log(this.state)
        }

    }

     handleChange(event){
         if(event.target.value){
             this.setState({searchTerm : event.target.value})
            }
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState((prevState)=>{
            // console.log('in handle submit')
            // console.log(prevState.searchTerm)
            return (
                {
                    ...prevState,
                    
                    searchImage: prevState.searchTerm
                }
                )
        })
    }

    render(){

        return(
            <div>
                <nav className="navbar">
                    <a className="logo navbar-brand" href="index.html">
                        <img src={logo} alt="logo"/>
                    </a>

                    <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                       <input className="searchBar form-control" onChange = {this.handleChange} name= "searchBar" value={this.searchTerm}></input>
                    </form>
                </nav>
            
                 {/* <MainContent/> */}
                
                 <Photos img={this.state.images} data={this.state.data}/> 
                


       </div>
    )
}
}
export default SearchResults