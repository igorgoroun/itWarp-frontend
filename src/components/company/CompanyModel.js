export default class Company {
    id;
    name_last;
    name_first;
    name_middle;
    address;
    itn;
    reg;
    single_tax;
    code_short;
    code_full;
    fop_name_full;
    fop_name_short;
    own_name_full;
    own_name_short;

    constructor(data) {
        Object.assign(this, data);
    }

}