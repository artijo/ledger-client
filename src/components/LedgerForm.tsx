import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import axios from "axios";
import { useLedgerStore } from "../store";

type Inputs = {
  title: string;
  description: string;
  amount: number;
  type: string;
};
export default function LedgerForm() {
  const fetchLedger = useLedgerStore((state: any) => state.fetchLedger);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const formdata = {
      title: data.title,
      description: data.description,
      amount: data.amount,
      type: data.type,
    }

    axios
      .post("http://localhost:4000/ledgers", formdata, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRpam8ubWVAaG90bWFpbC5jb20iLCJpYXQiOjE3MTQ1NzMzNTF9.5haaboIVOqH5Xr8t2QwFl0HXUdm6QDfsH3siQCYQ76k`,
        },
      })
      .then((res) => {
        console.log(res);
        fetchLedger();
        //clear form
        reset();

        if (res.status === 201) {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });

  };
  return (
    <>
      <h1>บันทึกรายรับ-รายจ่าย</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>หัวข้อ</Label>
        <Input
          {...register("title", { required: "กระรุณากรอกหัวข้อ" })}
          type="text"
        />
        {errors.title && <p>{errors.title.message}</p>}
        <Label>รายละเอียด</Label>
        <Input {...register("description")} type="text" />
        <Label>จำนวนเงิน</Label>
        <Input {...register("amount",{
          required: "กรุณากรอกจำนวนเงิน",
          valueAsNumber: true,
          min: {value: 0, message: "กรุณากรอกจำนวนเงินมากกว่า 0"}
        
        })} type="number" />
        {errors.amount && <p>{errors.amount.message}</p>}
        <Label>ประเภท</Label>


        <input type="radio" {...register("type", { required: "กรุณาเลือกประเภท" })} value="income" />
        <label>รายรับ</label>
        <input type="radio" {...register("type", { required: "กรุณาเลือกประเภท" })} value="expense" />
        <label>รายจ่าย</label>

        

        {errors.type && <p>{errors.type.message}</p>}
        <br />
        <Button variant="outline" type="submit">
          บันทึก
        </Button>
      </form>
    </>
  );
}
