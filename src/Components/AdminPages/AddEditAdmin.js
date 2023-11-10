import { useEffect, useState, useRef } from "react";
import axios from "../LoginSignup/axios-instance";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from "antd";

function AddEditAdmin(props) {
  const formRef = useRef();
  const [filmProviders, setFilmProviders] = useState([]);
  const onFinish = async (values) => {
    let filmProvider = filmProviders[0];
    const created =
      values.created.$y +
      "-" +
      (values.created.$M + 1) +
      "-" +
      values.created.$D;
    for (let i = 0; i < filmProviders.length; i++) {
      if (filmProviders[i].name === values.filmProvider)
        filmProvider = filmProviders[i];
    }

    const film = {
      name: values.name,
      des: values.des,
      rate: 0,
      directory: values.directory,
      img: values.img,
      filmRating: values.filmRating,
      length: values.length,
      filmProvider: filmProvider,
      created: created,
    };
    console.log(film);
    let checked = false;
    await axios
      .post("http://localhost:8080/film", film)
      .then((response) => {
        props.handelAddIsSuccess(response.data);
        checked = true;
      })
      .catch((err) => {
        checked = false;
        console.log(err);
      });
    if (checked === true) {
      message.success("Success");
      formRef.current.resetFields();
    } else {
      message.error("Failer");
    }
  };

  const fetchDataFilmProvider = async () => {
    await axios
      .get("http://localhost:8080/filmProvider")
      .then((response) => {
        setFilmProviders(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDataFilmProvider();
  }, []);
  return (
    <>
      <div className="bg-white w-2/5 h-auto m-auto mt-16 z-50 opacity-100 rounded-lg ">
        <Form
          ref={formRef}
          onFinish={onFinish}
          className="p-10 px-12"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          layout="vertical"
          initialValues={{
            size: "default",
            remember: true,
          }}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item name="name" label="Name">
            <Input required={true} />
          </Form.Item>
          <Form.Item name={"directory"} label="Directory">
            <Input required={true} />
          </Form.Item>
          <Form.Item name={"img"} label="Link-img">
            <Input required={true} />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name={"filmProvider"}
            label="FilmProvider"
          >
            <Select>
              {filmProviders.map((el) => {
                return (
                  <Select.Option key={el.id} value={el.name}>
                    {el.name}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name={"filmRating"}
            label="FilmRating"
          >
            <Select>
              <Select.Option value="P">P</Select.Option>
              <Select.Option value="C13">C13</Select.Option>
              <Select.Option value="C16">C16</Select.Option>
              <Select.Option value="C18">C18</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            rules={[{ required: true }]}
            name={"created"}
            label="Created"
          >
            <DatePicker />
          </Form.Item>
          <Form.Item name={"des"} label="Des">
            <Input required={true} />
          </Form.Item>
          <Form.Item name={"length"} label="Length">
            <InputNumber required={true} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">ADD</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default AddEditAdmin;
