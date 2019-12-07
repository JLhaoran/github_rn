/**
 * Created by mac on 2019/12/7.
 */
export default class NavigationUtil{
    /**
     * 返回上一页
     * @param navigation
     */
    static resetToHomePage(navigation){
        navigation.goBack();
    }

    /**
     * 重置到首页
     * @param params
     */
    static resetToHomePage(params){
        const {navigation} = params;
        navigation.navigate("Main");
    }
}