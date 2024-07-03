import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Webservice from "../service/Webservice";
import WebApi from "../service/WebApi";
import { Link } from "react-router-dom";
import '../App.css';

function Userhome() {

	const data = useSelector(state => state.userDetails.value);
	const [userPostList, setuserPostList] = useState([]);
	const [mypost, setmypost] = useState([{}]);
	const [showSpecificUserPosts, setShowSpecificUserPosts] = useState(false);
	const [commentboxvisisble, setcommentboxvisible] = useState(false);
	const [comment_msg, comment_setmsg] = useState();
	const [comment_icon ,setcomment_icon]=useState(false);
    const [like,setlike]=useState(false);
	 
	useEffect(() => {
		loadUserPostList();
	}, []);

	var loadUserPostList = async () => {
		var response = await Webservice.getAPICall(WebApi.showUsersPostList, data.data.token);
		console.log("user list response :" + JSON.stringify(response));
		var resp = response.data;
		if (resp.status) {
			setuserPostList(resp.data);
		}
	}

	var specificuserlist = async (id) => {
		console.log(id);
		var api = `${WebApi.showSpecificUserPostList}` + `/${id}`;
		console.log(api);
		var response = await Webservice.getAPICall(api, data.data.token);
		console.log("specific user list response :" + JSON.stringify(response));
		console.log(response.data.data);
		setmypost(response.data.data);
		console.log(mypost);
		setShowSpecificUserPosts(true);
	};

	const handleBackToAllPosts = () => {
		setShowSpecificUserPosts(false);
	};

	var comment = useRef();
	const commentOnPost = async (id) => {
		console.log(id);
		var cmt = comment.current.value;
		var pst = id;
		if (cmt == " ") { alert("pls write message before submit.....") }
		else {
			var obj = { comment: cmt, post: pst };
			var response = await Webservice.postAPIAuthCall(WebApi.saveComment, data.data.token, obj);
			console.log("comment response :" + JSON.stringify(response));
			console.log(response.data.data);
			comment_setmsg(response.data.message + " \t x");
			setcommentboxvisible(!commentboxvisisble);
		}
	};

	const handleclick = () => {
		setcommentboxvisible(!commentboxvisisble);
		setcomment_icon(!comment_icon);
	}

	const commentclose = () => {
		comment_setmsg(" ");
	}

	const clickLike = ()=>{ 
		setlike(!like)
	}

	return <div className="container pt-5">


		{showSpecificUserPosts ? (
			<div>
				{mypost.map((ele) => {
					return (
						<div className="container">
							<div className="row border-border-3 text-center">

								<div className="col-md-3 text-center p-5">
									<img src={ele.postBy.image} height={100} width={100}
										className="rounded-circle" />
									<br /><br />
									<b>{ele.postBy.name}</b>
								</div>

								<div className="col-md-9 text-center">
									<img src={ele.postfile} height={400} width={400} className="img-thumbnail img-rounded" />
									&nbsp;&nbsp;&nbsp;<br /><br />
									<b>{ele.message}</b><br /><br />
									<div class='row'>

										<div class='col-md-8 d-flex justify-content-start offset-4'>&emsp;

										  <button className="btn btn-no-border btn-no-hover" onClick={()=>clickLike()}>{(like)?<i className="fas fa-heart text-danger" style={{ fontSize: '30px' }}></i>:<i class='far fa-heart' style={{ fontSize: '30px' }}></i>}</button>&emsp;
										  <button className="btn btn-no-border btn-no-hover" onClick={() => handleclick()}>{(comment_icon)?<i class='fa fa-comment text-info' style={{ fontSize: '36px' }}></i>:<i class='far fa-comment' style={{ fontSize: '36px' }}></i>}</button>&emsp;
											<button className="btn btn-no-border btn-no-hover"><i class='fas fa-share' style={{ fontSize: '36px' }}></i></button>

											<br /><br /><br /><br />
										</div>
									</div>

									<div class='row'>
										<div class='col-md-6 d-flex justify-content-start offset-4'>&emsp;
											{(commentboxvisisble) &&
												<span className="row d-inline"><textarea rows={2} cols={7} placeholder="Comment" ref={comment}></textarea><button className="btn btn-info rounded-pill btn-sm" onClick={() => commentOnPost(ele.id)}>send</button></span>
											}
											<button className="btn btn-no-border btn-no-hover text-success" onClick={() => commentclose()}> <b>{comment_msg}</b></button >

										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}
				)
				}
				<div className="d-flex justify-content-end"><br /><br /><button type="button" class="btn btn-success text-light p-4 rounded-pill" onClick={handleBackToAllPosts}><i className="fas fa-home"></i>&emsp;Back to Home </button><br /><br /><br /></div>
			</div>
		) : (
			<div>
				<div className="container-fluid text-center rounded border border-4 mb-5 p-3 ">
					<b>Click here to upload Pic</b><br />
					<Link to='/uploadPost'><i className="far fa-plus-square" style={{ fontSize: '40px', color: 'black' }}></i></Link>
				</div>
				{userPostList.map((obj) => {
					//console.log(obj.id);
					return (<div className="row border-border-3 text-center">

						<div className="col-md-3 text-center p-5">
							<img src={obj.postBy.image} height={100} width={100}
								className="rounded-circle" />
							<br /><br />
							<b>{obj.postBy.name}</b>
						</div>

						<div className="col-md-9 text-center">
							<img src={obj.postfile} height={400} width={400} className="img-thumbnail img-rounded" />
							&nbsp;&nbsp;&nbsp;<br /><br />
							<b>{obj.message}</b><br /><br />
							<div class='row'>

								<div class='col-md-6 d-flex justify-content-end'>

									<button className="btn btn-no-border btn-no-hover" onClick={()=>clickLike()}>{(like)?<i className="fas fa-heart text-danger" style={{ fontSize: '30px' }}></i>:<i class='far fa-heart' style={{ fontSize: '30px' }}></i>}</button>&emsp;
									<button className="btn btn-no-border btn-no-hover" onClick={() => handleclick()}>{(comment_icon)?<i class='fa fa-comment text-info' style={{ fontSize: '36px' }}></i>:<i class='far fa-comment' style={{ fontSize: '36px' }}></i>}</button>&emsp;
									<button className="btn btn-no-border btn-no-hover"><i class='fas fa-share' style={{ fontSize: '36px' }}></i></button>

								</div>

								<div class="col-md-4 ">
									<button type="button" class="btn btn-primary text-light" onClick={() => specificuserlist(obj.postBy.id)}>view all</button><br />
								</div>

							</div>
						</div>
						<div class='row pb-4'>
							<div class='col-md-6 d-flex justify-content-start offset-5'>&emsp;&emsp;
								{(commentboxvisisble) &&
									<span className="row  d-flex"><textarea rows={2} cols={10} placeholder="Comment" ref={comment}></textarea><br /><button className="btn btn-info rounded-pill btn-sm w-50 offset-3" onClick={() => commentOnPost(obj.id)}>send</button></span>
								}<br/>
								<button className="btn btn-no-border btn-no-hover text-success" onClick={() => commentclose()}> <b>{comment_msg}</b></button ><br/><br/><br/>
							</div>
						</div>
					</div>)

				})
				}</div>
		)
		}
	</div>
}
export default Userhome;