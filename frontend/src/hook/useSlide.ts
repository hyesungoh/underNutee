import { useRecoilState } from "recoil";

import { slideIdState } from "store/regist";

const useSlide = () => {
    const [slideId, setSlideId] = useRecoilState(slideIdState);

    const onClickNext = () => {
        console.log(slideId);
        setSlideId(slideId + 1);
    };

    return { onClickNext };
};

export default useSlide;
