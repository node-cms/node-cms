import ApplicationUtil from '../util/application.util';

export default function ConfigDecorator(): ClassDecorator {
    return target => {
        ApplicationUtil.registerClass(target, 'config');
    };
}
