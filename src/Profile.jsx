import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();

  const [profile, setProfile] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // =========================
  // LOAD PROFILE
  // =========================
  useEffect(() => {
    async function loadProfile() {
      try {
        const res = await fetch(
          `http://localhost:3000/api/profile/${id}`
        );
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error("Error loading profile:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [id]);

  // =========================
  // HANDLE SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstname", profile.firstname || "");
    formData.append("lastname", profile.lastname || "");
    formData.append("email", profile.email || "");
    if (image) formData.append("image", image);

    await fetch(
      `http://localhost:3000/api/profile/${id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    alert("Profile updated!");
  };

  // =========================
  // SAFETY CHECK
  // =========================
  if (loading) return <div>Loading...</div>;
  if (!profile) return <div>Profile not found</div>;

  // =========================
  // UI
  // =========================
  return (
    <div>
      <h2>User Profile</h2>

      <form onSubmit={handleSubmit}>
        <p>
          <strong>ID:</strong> {profile._id}
        </p>

        <input
          placeholder="First Name"
          value={profile.firstname || ""}
          onChange={(e) =>
            setProfile({
              ...profile,
              firstname: e.target.value,
            })
          }
        />

        <input
          placeholder="Last Name"
          value={profile.lastname || ""}
          onChange={(e) =>
            setProfile({
              ...profile,
              lastname: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          value={profile.email || ""}
          onChange={(e) =>
            setProfile({
              ...profile,
              email: e.target.value,
            })
          }
        />

        <br /><br />

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImage(e.target.files[0])
          }
        />

        <br /><br />

        {profile.profileImage && (
          <img
            src={`http://localhost:3000${profile.profileImage}`}
            width="150"
            alt="profile"
          />
        )}

        <br /><br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
