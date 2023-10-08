import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form } from "react-bootstrap";

const CreateAd = () => {
  const [adType, setAdType] = useState({
    textAd: false,
    mediaAd: false,
  });

  const handleAdTypeChange = (type) => {
    setAdType((prevAdType) => ({
      ...prevAdType,
      [type]: !prevAdType[type],
    }));
  };

  return (
    <div className="p-3">
      <h5>Create Ads</h5>
      <div className="d-flex justify-content-center">
        <Card style={{ height: "20vh", width: "14%" }} className="p-2 m-4">
          <Card.Body className="text-center">
            <Form.Group>
              <Form.Check
                type="checkbox"
                name="textAd"
                checked={adType.textAd}
                onChange={() => handleAdTypeChange("textAd")}
                id="textAdCheckbox"
              />
              <div className="fs-6 pt-2">Create</div>

              <Form.Label htmlFor="textAdCheckbox" className="fs-4">
                Text Ad
              </Form.Label>
            </Form.Group>
          </Card.Body>
        </Card>

        <Card style={{ height: "20vh", width: "14%" }} className="p-2 m-4">
          <Card.Body className="text-center">
            <Form.Group>
              <Form.Check
                type="checkbox"
                name="mediaAd"
                checked={adType.mediaAd}
                onChange={() => handleAdTypeChange("mediaAd")}
                id="mediaAdCheckbox"
              />
              <div className="fs-6 pt-2">Create</div>
              <Form.Label htmlFor="mediaAdCheckbox" className="fs-4">
                Media Ad
              </Form.Label>
            </Form.Group>
          </Card.Body>
        </Card>
      </div>

      <FillData adType={adType} />
    </div>
  );
};

const FillData = ({ adType }) => {
  const [formData, setFormData] = useState({
    textAdContent1: "",
    description1: "",
    textAdContent2: "",
    businessName: "",
    buttonLabel: "",
    imageURL: "",
    websiteURL: "",
    mediaAdUrl1: "",
    mediaAdUrl2: "",
    mediaAdUrl3: "",
    mediaAdUrl4: "",
    mediaAdUrl5: "",
    mediaAdUrl6: "",
    mediaAdUrl7: "",
    mediaAdUrl8: "",
    mediaAdUrl9: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setTimeout(() => {
      setSubmitted(true);

      setTimeout(() => {
        navigate("/ads-submitted");
      }, 600);
    }, 600);

    setFormData({
      textAdContent1: "",
      description1: "",
      textAdContent2: "",
      businessName: "",
      buttonLabel: "",
      websiteURL: "",
      mediaAdUrl1: "",
      mediaAdUrl2: "",
      mediaAdUrl3: "",
      mediaAdUrl4: "",
      mediaAdUrl5: "",
      mediaAdUrl6: "",
      mediaAdUrl7: "",
      mediaAdUrl8: "",
    });
  };

  return (
    <div className="fluid-container p-3">
      {submitted ? (
        <div>
          <p>Submitting...</p>
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          {adType.textAd && (
            <div>
              <h5>Create Text & Media</h5>

              <div className="row pt-2">
                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="textAdContent1"
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Text Ad Content 1:
                    </label>
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="textAdContent1"
                      name="textAdContent1"
                      value={formData.textAdContent1}
                      placeholder="Add a heading that would make users interested"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          textAdContent1: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="description1"
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Description 1:
                    </label>
                    <textarea
                      type="text"
                      className="form-control mt-2"
                      id="description1"
                      name="description1"
                      value={formData.description1}
                      placeholder="Add primary text to help users understand more about your products, services or offers"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description1: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="row pt-2">
                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="textAdContent2"
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Text Ad Content 2:
                    </label>
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="textAdContent2"
                      name="textAdContent2"
                      value={formData.textAdContent2}
                      placeholder="Add a heading that would make users interested"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          textAdContent2: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="businessName"
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Business Name:
                    </label>
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      placeholder="Add your business name"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="row pt-2">
                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="buttonLabel"
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Button Label
                    </label>
                    <select
                      className="form-control mt-2"
                      id="buttonLabel"
                      name="buttonLabel"
                      value={formData.buttonLabel}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          buttonLabel: e.target.value,
                        })
                      }
                    >
                      <option value="">
                        Select a label that best suits your ad
                      </option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </select>
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="imageURL"
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Image URL :
                    </label>
                    <input
                      type="url"
                      className="form-control mt-2"
                      id="imageURL"
                      name="imageURL"
                      value={formData.imageURL}
                      placeholder="Add Image URL"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          imageURL: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="col pt-2">
                <div className="form-group">
                  <label
                    htmlFor="websiteURL"
                    style={{ fontWeight: "bold", fontSize: "14px" }}
                  >
                    Website URL
                  </label>
                  <input
                    type="url"
                    className="form-control mt-2"
                    id="websiteURL"
                    name="websiteURL"
                    value={formData.websiteURL}
                    placeholder="Add the URL of the landing page you want to redirect users to"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        websiteURL: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {adType.mediaAd && (
            <>
              <h5>Create Text & Media</h5>

              <div className="row pt-2">
                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="mediaAdUrl1"
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Heading 01
                    </label>
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="mediaAdUrl1"
                      name="mediaAdUrl1"
                      value={formData.mediaAdUrl1}
                      placeholder="Add a heading that would make users interested"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mediaAdUrl1: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="mediaAdUrl2"
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Description 01
                    </label>
                    <textarea
                      type="text"
                      className="form-control mt-2"
                      id="mediaAdUrl2"
                      name="mediaAdUrl2"
                      value={formData.mediaAdUrl2}
                      placeholder="Add Primary text to help users understand more about your products, services or offers"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mediaAdUrl2: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="row pt-2">
                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="mediaAdUrl3"
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Landscape Marketing Image (1:9:1)
                    </label>
                    <input
                      type="url"
                      className="form-control mt-2"
                      id="mediaAdUrl3"
                      name="mediaAdUrl3"
                      value={formData.mediaAdUrl3}
                      placeholder="Add the URL of the Image you want to use for the ad"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mediaAdUrl3: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="mediaAdUrl4"
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Portrait Marketing Image (4:5)
                    </label>
                    <input
                      type="url"
                      className="form-control mt-2"
                      id="mediaAdUrl4"
                      name="mediaAdUrl4"
                      value={formData.mediaAdUrl4}
                      placeholder="Add the URL of the Image you want to use for the ad"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mediaAdUrl4: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="mediaAdUrl5"
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Square Marketing Image (1:1)
                    </label>
                    <input
                      type="url"
                      className="form-control mt-2"
                      id="mediaAdUrl5"
                      name="mediaAdUrl5"
                      value={formData.mediaAdUrl5}
                      placeholder="Add the URL of the Image you want to use for the ad"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mediaAdUrl5: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="col pt-2">
                <div className="form-group">
                  <label
                    htmlFor="mediaAdUrl6"
                    style={{ fontWeight: "bold", fontSize: "14px" }}
                  >
                    Video URL :
                  </label>
                  <input
                    type="url"
                    className="form-control mt-2"
                    id="mediaAdUrl6"
                    name="mediaAdUrl6"
                    value={formData.mediaAdUrl6}
                    placeholder="Add the URL of the Image you want to use for the ad"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mediaAdUrl6: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="row pt-2">
                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="mediaAdUrl7"
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="mediaAdUrl7"
                      name="mediaAdUrl7"
                      value={formData.mediaAdUrl7}
                      placeholder="Add your business name"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mediaAdUrl7: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="mediaAdUrl8"
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      Button Label
                    </label>
                    <select
                      className="form-control mt-2"
                      id="mediaAdUrl8"
                      name="mediaAdUrl8"
                      value={formData.mediaAdUrl8}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mediaAdUrl8: e.target.value,
                        })
                      }
                    >
                      <option value="">
                        Select a label that best suits your ad
                      </option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col pt-2">
                <div className="form-group">
                  <label
                    htmlFor="mediaAdUrl9"
                    style={{ fontWeight: "bold", fontSize: "14px" }}
                  >
                    Website URL
                  </label>
                  <input
                    type="url"
                    className="form-control mt-2"
                    id="mediaAdUrl9"
                    name="mediaAdUrl9"
                    value={formData.mediaAdUrl9}
                    placeholder="Add the URL of the landing page you want to redirect users to"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mediaAdUrl9: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </>
          )}

          <div className="d-flex justify-content-end mt-5 ">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export { FillData, CreateAd };
