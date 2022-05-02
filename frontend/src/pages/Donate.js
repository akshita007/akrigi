import { Button, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {BiImageAdd} from "react-icons/bi";
import {useState, useEffect} from "react";
import {ngoList,createDonationPost} from "../services/api";

const DonationForm = ()=>{
    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');
    const [category,setCategory] = useState('');
    const [ngo,setNGO] = useState('');
    const [files, setFiles] = useState();
    const [image,setImage] = useState();
    const [ngolst,setngolst]=useState([]);
    const fetchLst = async()=>{
        const data =await ngoList();
        const ngolst=data;
        setngolst(ngolst);
    };
   
    const handleChange =(e)=>{
        if(!e.target.files || e.target.files.length === 0) {
            setFiles(undefined);
            return
        }
        setFiles(e.target.files);
    };

    useEffect(()=>{
        fetchLst();
            if(!files) {
                setImage(undefined);
                return
            };
            const newImgUrl = [];
            for(let i =0; i< files.length;i++) {
                newImgUrl.push(URL.createObjectURL(files[i]));
            }
            console.log(newImgUrl)
            setImage(newImgUrl);
    },[files]);

    
    const publishPost = async()=>{
       const formData = new FormData()
       formData.append('name',name);
       formData.append('category',category);
       formData.append('desc',desc);
       formData.append('ngo',ngo)
       for(let i =0; i< files.length;i++){
           formData.append('images',files[i]);
       }
       if( name !== '' && category !==''  && desc !=='' && image !==''){
        console.log(formData);
        await createDonationPost(formData)
        alert("Post created!")
        window.location.replace("/landingpage");
       }else{
           alert('Insert data in all the fields');
       }
        
    };
    return(
        <div>
             
            <Form>
                <Container style={{
                    width:"600px",
                }}>
                <h1 style={{
                    textAlign:"center",
                    margin:"18px",
                    padding:"10px",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight:"bold",
                    fontSize:"2.5rem",
                    color:"brown"}}>Wanna Donate!</h1>
                    <Row className="align-items-center">
                     { files && image &&  image.map((imgsrc)=>
                    (<img src={imgsrc} alt="error" style={{
                        height:'250px',
                        width:"250px",
                        margin:"auto",
                        padding:"10px"}}
                    />))}   
                        
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='Name of your Product'
                                        type ='text' 
                                        name='name'
                                        onChange={(e)=>setName(e.target.value)}
                                         required/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <Form.Select onChange={(e)=>setCategory(e.target.value)}>
                                <option>Choose from Category:</option>
                                <option value="Women">Women</option>
                                <option value="Men">Men</option>
                                <option value="Kids">Kids</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Bags">Bags</option>
                                <option value="Books">Books</option>
                                <option value="Shoes">Shoes</option>
                            </Form.Select>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <Form.Select onChange={(e)=>setNGO(e.target.value)}>
                                <option>Choose from NGO's:</option>
                                {
                                    ngolst.map(ngo =>(
                                        <option key={ngo.id} value={ngo.username}>{ngo.username}</option>
                                    ))
                                }
                            </Form.Select>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='Description for the product'
                                        as ='textarea'
                                        name='desc'
                                        onChange={(e)=>setDesc(e.target.value)}
                                        rows={4}
                                         required/>
                        </InputGroup>
                        <input type="file" id = "images"  onChange={(e)=>handleChange(e)}
                        name="images" style = {{display:"none"}} multiple required/>
                        <label htmlFor="images" style={{margin:"10px",padding:"7"}}>Add Files (max 6 allowed):<BiImageAdd size={40} style={{marginLeft:"10px"}}/></label>

                    </Row>
                    <div className="d-grid gap-2 mb-4" style={{margin:"10px"}}>
                        {localStorage.getItem("token")!==null?
                        (<Button variant="primary" size="lg" onClick={()=>publishPost()}>Donate</Button>)
                    :(<Button variant="primary" size="lg" onClick={()=>{alert("Please Login first!")}}>Donate</Button>)}    
                    </div>
                </Container>
            </Form>
        </div>
 
    )
}

export default DonationForm;
