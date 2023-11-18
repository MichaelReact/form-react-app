export const validator=(data,config)=>{
    const errors={};

    function validate(key,dataField,configField){
        // let statusField;
            switch (configField){
                case 'isRequired':
                    if(dataField==='' || dataField.length===0){
                       
                        return key.message;
                    }
                break;
                case 'isEmail':
                    const regex=/^\S+@\S+\.\S+$/g;
                    if(!regex.test(dataField)){
                       
                        return key.message;
                    }
                break;
                case 'isCapitalLetter':
                    const letter=/[A-Z]+/g;
                    if(!letter.test(dataField)){
                      
                        return key.message;
                    }
                break;
                case 'min':
                    if(dataField.length<key.value){
                        return key.message
                    }
                    break;
                default:

            }

            
    }

    for(const fieldName in data){
        for(const configName in config[fieldName]){
               const error=validate(config[fieldName][configName],data[fieldName],configName);
            if(error&&!errors[fieldName]){
                errors[fieldName]=error
            }
        }
    }
    return errors;
};