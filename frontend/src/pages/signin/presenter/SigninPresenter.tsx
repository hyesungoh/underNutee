import { Link } from "react-router-dom";
import SignInput from "components/Sign/SignInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import logoGoogle from "static/images/google.png";
import logoKakao from "static/images/kakao.png";
import logoNaver from "static/images/naver.png";

import "pages/signIn/SignIn.scss";

interface ISignInPresenter {
    onGoogleLogin: () => void;
    onKakaoLogin: () => void;
    onNaverLogin: () => void;
}

const SignInPresenter = ({
    onGoogleLogin,
    onKakaoLogin,
    onNaverLogin,
}: ISignInPresenter) => {
    // const [id, setId] = useState<string>("");
    // const [password, setPassword] = useState<string>("");

    return (
        <div className="center">
            <div className="signinform">
                <div className="signinform__text">
                    <span>
                        SKHUED <b>IN</b>에 로그인하고 <b>취뽀</b>하기
                    </span>
                </div>

                {/* <SignInput text={"ID"} setState={setId} />

                <SignInput text={"Password"} setState={setPassword} /> */}

                <div className="signinform__social">
                    <div
                        id="google"
                        className="signinform__social__logo"
                        onClick={onGoogleLogin}
                    >
                        <img src={logoGoogle} alt="google" />
                    </div>
                    <div
                        id="kakao"
                        className="signinform__social__logo"
                        onClick={onKakaoLogin}
                    >
                        <img src={logoKakao} alt="kakao" />
                    </div>
                    <div
                        id="naver"
                        className="signinform__social__logo"
                        onClick={onNaverLogin}
                    >
                        <img src={logoNaver} alt="naver" />
                    </div>
                </div>

                {/* <span className="signinform__link">
                    아직 회원이 아니신가요?{" "}
                    <Link to="/signup">회원가입 하러가기</Link>
                </span>

                <button className="signinform__btn" onClick={onSignIn}>
                    Sign In
                </button> */}
            </div>
        </div>
    );
};

export default SignInPresenter;
