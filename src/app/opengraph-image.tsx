import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/shared/lib/seo";

export const alt = SITE_NAME;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#072a42",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            backgroundColor: "#157cc1",
            opacity: 0.25,
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "#da3825",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              fontWeight: 900,
              color: "#ffffff",
            }}
          >
            B
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "34px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "1px",
            }}
          >
            BISMILLAH COMPUTER &amp; TECHNOLOGY
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "72px",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          <span>IT Solutions That Move</span>
          <span>Your Business Forward</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            color: "#cbd5e1",
            marginTop: "32px",
            maxWidth: "820px",
          }}
        >
          Web &middot; Cloud &middot; Voice &middot; Internet &middot; Cyber Security
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            right: "80px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "22px",
            color: "#94a3b8",
          }}
        >
          <span>bct.com.bd</span>
          <span>Managed IT Support &bull; NBN &bull; Microsoft 365</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
