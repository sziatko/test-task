import { PaginationInfoInterface } from './pagination-info.interface';
import { UserInterface } from './user.interface';

export interface UsersInterface extends PaginationInfoInterface{
  data: UserInterface[],
}

export interface UserAPIInterface {
  data: UserInterface,
}
