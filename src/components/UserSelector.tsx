import { UserConstante } from "@/constants/enum";
import {
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
} from "@/mocks/user";
import { UserType } from "@/types/type";
import { Select } from "@chakra-ui/react";

const UserSelector = ({
  setCurrentUser,
}: {
  setCurrentUser: React.Dispatch<React.SetStateAction<UserType>>;
}) => {
  const onChange = (value: string) => {
    switch (value) {
      case UserConstante.USER_WITH_ONE_SUBSCRIPTION:
        setCurrentUser(USER_WITH_ONE_SUBSCRIPTION);
        break;
      case UserConstante.USER_WITHOUT_SUBSCRIPTION:
        setCurrentUser(USER_WITHOUT_SUBSCRIPTION);
        break;
      case UserConstante.USER_WITH_MULTIPLE_SUBSCRIPTION:
        setCurrentUser(USER_WITH_MULTIPLE_SUBSCRIPTION);
        break;
      default:
        break;
    }
  };

  return (
    <Select
      defaultValue={UserConstante.USER_WITH_ONE_SUBSCRIPTION}
      onChange={(e) => onChange(e.target.value as UserConstante)}
    >
      <option value={UserConstante.USER_WITH_ONE_SUBSCRIPTION}>
        user with one subscription
      </option>
      <option value={UserConstante.USER_WITHOUT_SUBSCRIPTION}>
        user without subscription
      </option>
      <option value={UserConstante.USER_WITH_MULTIPLE_SUBSCRIPTION}>
        user with multiple subscription
      </option>
    </Select>
  );
};

export default UserSelector;
