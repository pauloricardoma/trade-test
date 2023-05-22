/* eslint-disable no-nested-ternary */
import Button from '../../Components/Button';
import FormGroup from '../../Components/FormGroup';
import Input from '../../Components/Input';
import Icon from '../../Components/Icon';
import * as yup from 'yup';
import { ILoginRequest } from '../../Data/interface/Auth/ILoginRequest';
import invalidIcon from '../../Assets/images/icons/invalid-icon.svg';
import { Form } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Spinner from '../Spinner';

interface ILoginForm {
  error?: string;
  onSubmit: (data: ILoginRequest) => void;
  loading?: boolean;
}

const schema = yup.object({
  apikey: yup.string().required('Campo obrigatório'),
}).required();

function LoginForm({ onSubmit, loading }: ILoginForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginRequest>({resolver: yupResolver(schema)});

  return (
    <Form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup
        title="Api-Key"
        error={errors.apikey?.message}
      >
        <Input {...register('apikey')} type="text" />
        {errors.apikey?.message && <Icon src={invalidIcon} />}
      </FormGroup>

      <div className="submit">
        <Button type="submit">
          Entrar
          {loading && <Spinner size={12} />}
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
